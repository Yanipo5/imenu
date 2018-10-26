<template>
  <v-card class="elevation-10">
    <v-card-title class="py-0">
      <v-text-field label="Enter Section Name" v-model="name" />
    </v-card-title>
    <v-card-text class="pa-0" v-for="i in section.items" :key="i.id">
      <SectionItem @delete="deleteSectionItem" @add="addSectionItem" @save="saveSectionItem" :s_id="id" :i_id="i.id" :length="sectionsLength" />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Section } from "@/utils/types.ts";
import SectionItem from "./SectionItem.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
export default Vue.extend({
  props: ["id", "length"],
  components: { SectionItem },
  computed: {
    ...mapState("menu", ["sections"]),
    ...mapGetters("menu", ["getMenuSection"]),
    section(): Section {
      return this.getMenuSection(this.id);
    },
    sectionsLength(): number {
      return this.sections.length;
    },
    name: {
      get(): string {
        return this.section.name;
      },
      set(s: string) {
        this.section.name = s;
      }
    }
  },
  methods: {
    ...mapMutations("menu", [
      "addSectionItem",
      "saveSectionItem",
      "deleteSectionItem"
    ])
  }
});
</script>

<style>
</style>
