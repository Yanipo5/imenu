<template>
  <v-card class="elevation-10">
    <v-card-title class="py-0">
      <v-text-field label="Enter Section Name" v-model="name" />
    </v-card-title>
    <v-card-text class="pa-0">
      <transition-group name="list" tag="p">
        <SectionItem v-for="i in section.items" :key="i.id" @delete="deleteSectionItem" @add="addSectionItem" @save="saveSectionItem" :item="i" :s_id="section.id" :s_length="sectionsItemsLength" />
      </transition-group>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Section } from "@/utils/types.ts";
import SectionItem from "./SectionItem.vue";
import { mapState, mapMutations } from "vuex";
export default Vue.extend({
  props: ["section", "length"],
  components: { SectionItem },
  computed: {
    sectionsItemsLength(): number {
      return this.section.items.length;
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

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

