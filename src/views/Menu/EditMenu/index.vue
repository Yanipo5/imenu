<template>
  <v-container>
    <h5 class="headline">Menu Setting</h5>
    <v-layout column>
      <v-text-field v-model="name" label="Resutarnt Name" />
      <MenuSections />
      <!-- <v-layout justify-center class="mt-3">
        <v-btn class="primary">Save</v-btn>
      </v-layout> -->
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import MenuSections from "./MenuSections.vue";
import { mapState } from "vuex";
export default Vue.extend({
  components: { MenuSections },
  computed: {
    ...mapState("menu", ["name"])
  }
});
</script>


<style>
</style>
