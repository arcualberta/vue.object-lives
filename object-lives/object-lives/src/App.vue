<template>
  <div id="App" class="d-flex flex-column min-vh-100">
    <div class="theme-switcher">
      <input
        type="checkbox"
        id="theme-toggle"
        v-model="isDarkMode"
        @change="toggleTheme"
      />
      <label for="theme-toggle">Toggle Theme</label>
    </div>
    <SiteHeader @logout="logout" />
    <div class="content-container flex-grow-1">
      <router-view />
    </div>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type { AuthorizationResult } from "@arc/authorization";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { useProfileStore } from "./store/ProfileStore";
import { default as config } from "./appsettings";

const isDarkMode = ref(false);
const router = useRouter();
const profileStore = useProfileStore();


console.log("URL: ", window.location?.host);
console.log("Auth: " + config.dev.auth);
console.log("Solr: " + config.dev.solr);

function toggleTheme() {
  document.body.className = isDarkMode.value ? "dark-mode" : "";
}

// Check for authorization result on page load
onMounted(() => {
  const sessionAuthResult = sessionStorage.getItem("authResult");
  if (sessionAuthResult && sessionAuthResult !== "undefined") {
    const authResult = JSON.parse(sessionAuthResult) as AuthorizationResult;
    profileStore.userLoginResult = authResult.loginResult;
    profileStore.userLoginToken = authResult.jwtToken;
  }
});

// Logout function
const logout = () => {
  profileStore.userLoginToken = null;
  profileStore.userLoginResult = null;
  sessionStorage.removeItem("authResult");
  return false;
};
</script>

<style scoped>
:global(body) {
  font-family: var(--font-family);
  background-color: var(--page-background-color);
  color: var(--text-font-color);
}

.theme-switcher {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
}

input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 25px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: #bada55;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

body.dark-mode {
  --page-background-color: var(--dark-page-background-color);
  --header-background-color: var(--dark-header-background-color);
  --title-font-color: var(--dark-title-font-color);
  --heading-color: var(--dark-heading-color);
  --text-font-color: var(--dark-text-font-color);
  --link-color: var(--dark-link-color);
}
</style>
