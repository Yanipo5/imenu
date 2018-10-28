<template>
  <v-toolbar app clipped-left fixed>
    <v-toolbar-side-icon @click="toggleNavigationDrawer" />
    <v-toolbar-title>Imenu</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-layout align-center>
        <span class="mr-2">{{email}}</span>
        <v-btn @click="signOut">
          <v-icon class="mr-2">exit_to_app</v-icon>
          <span>Sign Out</span>
        </v-btn>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lng="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("user", ["email"]),
    ...mapState("appLayout", ["isNavigationDrawerOpen"])
  },
  methods: {
    ...mapMutations("appLayout", ["toggleNavigationDrawer"]),
    ...mapMutations("user", ["clearUser"]),
    signOut() {
      this.clearUser();
      window.location = "/signin";
    }
  }
};
</script>

<style>
</style>
