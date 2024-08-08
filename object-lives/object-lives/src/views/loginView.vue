<script setup lang="ts">
import { getActivePinia } from "pinia";
import { useRouter } from "vue-router";
import type { AuthorizationResult } from "@arc/authorization";
import { useProfileStore } from "@/store/ProfileStore";

const router = useRouter();
const apiRoot = "https://auth-test.artsrn.ualberta.ca/v1";
const tenantId = "95302eb2-596e-ceb7-4de6-5917b29d5fa2";
const profileStore = useProfileStore();

const handleAuthorizationResult = (authResult: AuthorizationResult) => {
  // Store authorization result in session storage
  sessionStorage.setItem("authResult", JSON.stringify(authResult));
  profileStore.userLoginResult = authResult.loginResult;
  profileStore.userLoginToken = authResult.jwtToken;

  // Redirect back to previous page
  router.go(-1);
};
</script>

<template>
  <div class="container login-panel">
    <div class="login-label">Login with Google</div>
    <div class="button-center">
      <!-- Login component with props -->
      <Login
        :pinia-instance="getActivePinia()"
        :tenantId="tenantId"
        :apiRoot="apiRoot"
        @authorizationResult="handleAuthorizationResult"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 200px;
  margin-bottom: 300px;
}
.button-center {
  margin-top: 50px;
  text-align: center;
}
.login-label {
  font-size: 32px;
  font-weight: 600;
  color: #327d49;
  margin-left: 50px;
  padding-top: 60px;
  text-align: center;
}
</style>
