<template>
  <v-container>
    <v-layout>
      <v-select small label="Select Currency" v-model="currency" :items="currencies" />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  data: () => ({
    currencies: ["$", "a", "b"]
  }),
  computed: {
    ...mapState("menuSetting", ["currency"])
  }
});
</script>

<style>
</style>
