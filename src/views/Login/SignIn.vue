<template>
  <BaseLoginPage>
    <v-form v-model="isValid" class="text-xs-center">
      <v-text-field v-model="email" label="Email" :rules="[rules.requried, rules.email]" hint="any email will do" />
      <v-text-field v-model="password" label="Password" :rules="[rules.requried]" hint="any password will do" />
      <v-btn @click="doLogin" :loading="isLoading" :disabled="!isValid" class="primary">Demo Sign In</v-btn>
    </v-form>
  </BaseLoginPage>
</template>

<script lang="ts">
import Vue from "vue";
import rules from "@/utils/rules.ts";
import BaseLoginPage from "./BaseLoginPage.vue";
import { mapActions } from "vuex";

export default Vue.extend({
  data: () => ({
    email: "",
    password: "",
    isValid: false,
    rules,
    isLoading: false
  }),
  components: { BaseLoginPage },
  methods: {
    ...mapActions("user", ["login"]),
    async doLogin(): Promise<void> {
      this.isLoading = true;
      setTimeout(() => {
        // @ts-ignore
        this.login(this.email);
        this.isLoading = false;
        this.$router.push("/menu/edit");
      }, 1000);
    }
  }
});
</script>

<style>
</style>
