<template>
    <v-navigation-drawer persistent clipped :value="isNavigationDrawerOpen" enable-resize-watcher fixed app>
        <v-list>
            <v-list-group v-for="cat in pages" :key="cat.name" :prepend-icon="cat.icon">
                <v-list-tile slot="activator">
                    <v-list-tile-title class="cap-first-latter" v-text="cat.name" />
                </v-list-tile>

                <v-list-tile v-for="page in cat.children" :key="page.name" :to="`${cat.path}${page.path}`">
                    <v-list-tile-title v-text="page.name" />
                </v-list-tile>
            </v-list-group>
            <v-divider></v-divider>
        </v-list>
    </v-navigation-drawer>
</template>

<script lng="ts">
import Vue from "vue";
import { pages } from "@/utils/pages.ts";
import { mapState } from "vuex";

export default Vue.extend({
  data: () => ({
    pages
  }),
  computed: {
    ...mapState("appLayout", ["isNavigationDrawerOpen"])
  }
});
</script>

<style>
</style>
