<template>
    <BaseLoginPage>
        <v-form v-model="isValid" class="text-xs-center">
            <v-text-field v-model="email" label="Email" :rules="[rules.requried, rules.email]" />
            <v-text-field v-model="password" label="Password" :rules="[rules.requried]" />
            <v-btn @click="setDemo" class="success">Login Demo</v-btn>
            <v-btn @click="doLogin" :disabled="!isValid" class="primary">Sign In</v-btn>
        </v-form>
    </BaseLoginPage>
</template>

<script lang="ts">
import Vue from "vue";
import rules from "@/utils/rules.ts";
import BaseLoginPage from "./BaseLoginPage.vue";

export default Vue.extend({
  data: () => ({
    email: "",
    password: "",
    isValid: false,
    rules
  }),
  components: { BaseLoginPage },
  methods: {
    setDemo(): void {
      this.email = "demo@demo.com";
      this.password = "demo";
      this.doLogin();
    },
    doLogin(): void {
      this.$router.push("/menu/edit");
    }
  }
});
</script>

<style>
</style>
