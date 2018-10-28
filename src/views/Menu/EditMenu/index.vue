<template>
  <v-container>
    <h5 class="headline">Menu Setting</h5>
    <v-layout column>
      <v-text-field v-model="name" label="Resutarnt Name" />
      <MenuSections />
      <v-layout justify-center class="mt-3">
        <v-btn class="primary" @click="storeMenu">Save</v-btn>
        <v-btn class="info" @click="resetMenu">RESET</v-btn>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import MenuSections from "./MenuSections.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default Vue.extend({
  components: { MenuSections },
  computed: {
    ...mapState("menu", ["name"])
  },
  methods: {
    ...mapActions("menu", ["storeMenu", "resetMenu"])
  }
});
</script>


<style>
</style>
