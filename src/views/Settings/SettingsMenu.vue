<template>
  <v-container>
    <h6 class="title mb-3">Menu Setting</h6>
    <v-layout>
      <v-select small label="Select Currency" v-model="ca" :items="currencies" />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
export default Vue.extend({
  computed: {
    ca: {
      get(): string {
        // @ts-ignore
        return this.currency;
      },
      set(currency: string): void {
        // @ts-ignore
        this.setCurrency(currency);
      }
    },
    ...mapState("menuSetting", ["currency", "currencies"])
  },
  methods: {
    ...mapMutations("menuSetting", ["setCurrency"])
  }
});
</script>

<style>
</style>
