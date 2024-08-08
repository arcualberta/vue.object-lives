import type { AuthorizationResult, LoginResult } from "@arc/authorization";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    userLoginResult: null as LoginResult | null,
    userLoginToken: null as string | null,
  }),
  getters: {
    isUserLoggedIn: (state) => !!state.userLoginToken,
  },
  actions: {
    setLoginResult(authResult: AuthorizationResult) {
      this.userLoginResult = authResult.loginResult;
      this.userLoginToken = authResult.jwtToken;
    },
    clearLogin() {
      this.userLoginResult = null;
      this.userLoginToken = null;
    },
  },
});
