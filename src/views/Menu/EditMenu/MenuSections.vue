<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="s in menuSorted" :key="s.id">
      <v-layout row slot="header" align-center>
        <v-flex xs10>
          <span>{{s.name}}</span>
        </v-flex>
        <v-flex xs2>
          <MenuButtons :isDisabled="isDisabled" @add="handleAdd(s)" @delete="handleDelete(s)" />
        </v-flex>

      </v-layout>
      <MenuSection :section="s" :length="sectionsLength" />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { Section } from "@/utils/types.ts";
import MenuButtons from "@/components/MenuButtons.vue";
import MenuSection from "./MenuSection.vue";
export default Vue.extend({
  components: { MenuButtons, MenuSection },
  computed: {
    ...mapState("menu", ["sections"]),
    ...mapGetters("menu", ["menuSorted"]),
    sectionsLength(): number {
      // @ts-ignore
      return this.sections.length;
    },
    isDisabled(): boolean {
      // @ts-ignore
      return this.sections.length < 2;
    }
  },
  methods: {
    ...mapMutations("menu", ["addSection", "deleteSection"]),
    handleAdd(s: Section): void {
      // @ts-ignore
      this.addSection({ s_id: s.id, order: s.order });
    },
    handleDelete(s: Section): void {
      // @ts-ignore
      this.deleteSection(s.id);
    }
  }
});
</script>

</script>

<style>
</style>
