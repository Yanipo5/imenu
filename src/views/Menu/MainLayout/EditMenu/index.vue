<template>
    <v-container>
        <v-layout column>
            <v-text-field label="Resutarnt Name" />
            <MenuSection v-for="s in sections" :key="s.id" :id="s.id" :length="sectionsLength" />
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import MenuSection from "./MenuSection.vue";
import { mapState } from "vuex";
export default Vue.extend({
  components: { MenuSection },
  computed: {
    ...mapState("menu", ["sections"]),
    sectionsLength(): number {
      return this.sections.length;
    }
  }
});
</script>


<style>
</style>
