<script setup lang="ts">
import { getActivePinia } from "pinia";
import type { AuthorizationResult } from "@arc/authorization";
import { useRouter } from "vue-router";

interface AuthResult {
  userId: string;
  accessToken: string;
}

const router = useRouter();
const apiRoot = "https://auth-test.artsrn.ualberta.ca/v1";
const tenantId = "95302eb2-596e-ceb7-4de6-5917b29d5fa2";

const handleAuthorizationResult = (authResult: AuthorizationResult) => {
  sessionStorage.setItem("authResult", JSON.stringify(authResult));
  router.go(-1);
};
</script>

<template>
  <div class="container login-pannel">
    <div class="login-lable">Login with Google</div>
    <div class="button-centre">
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
.login-pannel {
  margin-top: 200px;
  margin-bottom: 300px;
}
.button-centre {
  margin-top: 50px;
  text-align: center;
}
.login-lable {
  font-size: 32px;
  font-weight: 600;
  color: #327d49;
  margin-left: 50px;
  padding-top: 60px;
  text-align: center;
}
</style>
