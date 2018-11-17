<template>
  <BaseLoginPage>
    <v-form v-model="isValid" class="text-xs-center">
      <v-text-field v-model="email" label="Email" :rules="[rules.requried, rules.email]" hint="any email will do" />
      <v-text-field v-model="password" label="Password" :rules="[rules.requried]" hint="any password will do" />
      <v-btn @click="doLogin" :loading="isLogin" :disabled="!isValid || isCreate" class="primary">Sign In</v-btn>
      <v-btn @click="handleCreate" :loading="isCreate" :disabled="!isValid || isLogin" class="primary darken-2">Create New User</v-btn>
      <v-snackbar v-model="fail" top color="error" class="text-xs-center">{{failText}}</v-snackbar>
    </v-form>
    <div>
    </div>
  </BaseLoginPage>
</template>

<script lang="ts">
import Vue from "vue";
import rules from "@/utils/rules.ts";
import BaseLoginPage from "./BaseLoginPage.vue";
import { mapActions } from "vuex";

export default Vue.extend({
  data: () => ({
    fail: false,
    failText: "",
    email: "",
    password: "",
    isValid: false,
    rules,
    isLogin: false,
    isCreate: false
  }),
  components: { BaseLoginPage },
  computed: {
    credetials(): Object {
      // @ts-ignore
      return { email: this.email, password: this.password };
    }
  },
  methods: {
    ...mapActions("user", ["loginUser", "createUser"]),
    async doLogin(): Promise<void> {
      try {
        this.isLogin = true;
        // @ts-ignore
        const success = await this.loginUser(this.credetials);
        if (success) return this.$router.push("/menu/edit");
        this.fail = true;
        this.failText = "login failed! user & password do not match.";
      } finally {
        this.isLogin = false;
      }
    },
    async handleCreate() {
      try {
        this.isCreate = true;
        // @ts-ignore
        const success = await this.createUser(this.credetials);
        if (success) return this.$router.push("/menu/edit");
        this.failText = "Signup failed! please try again latter.";
        this.fail = true;
      } finally {
        this.isCreate = false;
      }
    }
  }
});
</script>

<style>
</style>
