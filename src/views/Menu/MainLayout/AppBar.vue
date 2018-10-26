<template>
  <v-toolbar app clipped-left fixed>
    <v-toolbar-side-icon @click="toggleNavigationDrawer" />
    <v-toolbar-title>Imenu</v-toolbar-title>
  </v-toolbar>
</template>

<script lng="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("appLayout", ["isNavigationDrawerOpen"])
  },
  methods: {
    ...mapMutations("appLayout", ["toggleNavigationDrawer"])
  }
};
</script>

<style>
</style>
