<template>
  <div class="header-container">
    <header class="bg-black text-white py-2">
      <div class="container d-flex justify-content-between align-items-center">
        <h1 class="display-1 header-text">
          Object lives and Global histories in Northern North America: 1700s -
          2000s
        </h1>
      </div>
    </header>

    <nav class="navbar navbar-expand-lg navbar-dark bg-black">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/TheProject" class="nav-link"
                >The Project</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/TheContributors" class="nav-link"
                >The Contributors</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/DiscoveryProcess" class="nav-link"
                >Discovery Process</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/DiscoveryWorkshop" class="nav-link"
                >Discovery Workshop</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/Publications" class="nav-link"
                >Publications</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/Support" class="nav-link">Support</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/SubmissionWorkshop" class="nav-link"
                >Workshop Submission</router-link
              >
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link
                to="/Login"
                class="nav-link login-link"
                aria-label="Login"
              >
                <font-awesome-icon icon="right-to-bracket" class="login-icon" />
                <span class="login-text">Login</span>
              </router-link>
            </li>
            <li class="nav-item" v-else>
              <button
                @click="$emit('logout')"
                class="nav-link btn btn-link logout-link"
              >
                <font-awesome-icon
                  icon="right-from-bracket"
                  class="login-icon"
                />
                <span class="logout-text">Logout</span>
              </button>
            </li>
          </ul>
        </div>

        <div class="social-icons d-none d-lg-flex">
          <a
            href="https://www.facebook.com/objectlives/"
            target="_blank"
            class="social-icon"
          >
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </a>
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2FObjectLives"
            target="_blank"
            class="social-icon"
          >
            <font-awesome-icon icon="fa-brands fa-x-twitter" />
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useProfileStore } from "@/store/ProfileStore";

const profileStore = useProfileStore();

const isLoggedIn = computed(() => !!profileStore.userLoginToken);
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.header-container {
  display: flex;
  flex-direction: column;
}

header {
  position: relative;
  background-color: black;
}

h1 {
  font-size: 30px;
  background-color: rgba(199, 35, 35, 0);
  padding: 3px;
  margin-bottom: -10px;
}

.navbar {
  background-color: black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-links {
    display: flex;
    align-items: center;
  }

  .nav-link {
    &:hover {
      background-color: #333;
    }
  }
}

.login-link,
.logout-link {
  display: inline-block;
  color: #fff;
  font-size: 24px;
  margin-left: 11.8rem;
}

.login-text,
.logout-text {
  display: none;
}

.logout-link .logout-icon {
  margin-right: 8px;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 30px;
}

.social-icon {
  color: #fff;
  font-size: 20px;
  transition: color 0.3s;

  &:hover {
    color: #ccc;
  }
}

@media (min-width: 280px) and (max-width: 920px) {
  .login-link,
  .logout-link {
    margin-left: 0;
  }

  .nav-links {
    order: 1;
  }

  .social-icons {
    order: 2;
    margin-right: 0;
  }

  .login-link,
  .logout-link {
    order: 3;
    font-size: 15px;
  }

  .login-text,
  .logout-text {
    display: inline-block;
  }

  h1 {
    font-size: 1.8rem;
  }
}

@media (min-width: 921px) and (max-width: 1025px) {
  .login-link,
  .logout-link {
    margin-left: 4rem;
    font-size: 13px;
    margin-right: 0.5rem;
  }

  .nav-item {
    font-size: 13px;
  }

  .nav-links {
    order: 1;
    font-size: 10px;
  }

  .social-icons {
    order: 2;
    margin-left: 2px;
    gap: 15px;

    a {
      font-size: 13px;
    }
  }

  .login-link,
  .logout-link {
    order: 3;
  }

  .nav-link {
    white-space: nowrap;
  }
}

@media (min-width: 1026px) and (max-width: 1280px) {
  .login-link,
  .logout-link {
    margin-left: 7rem;
    margin-right: 1.4rem;
    font-size: 18px;
  }

  .nav-links {
    order: 1;
    margin-right: auto;
  }

  .navbar {
    font-size: 15px;
  }

  .social-icons {
    order: 2;
    margin-right: 2rem;

    a {
      font-size: 18px;
    }
  }

  .login-link,
  .logout-link {
    order: 3;
  }

  .nav-link {
    white-space: nowrap;
  }
}
</style>
