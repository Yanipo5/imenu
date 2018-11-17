<template>
  <v-container>
    <h5 class="headline">Menu Creator</h5>
    <v-layout v-if="loading" justify-center>
      <v-progress-circular color="primary" indeterminate />
    </v-layout>
    <v-layout column v-else>
      <v-text-field v-model="name" label="Resutarnt Name" />
      <MenuSections />
      <v-layout justify-center class="mt-3">
        <v-btn class="primary" :loading="saving" @click="handleSave">Save</v-btn>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import MenuSections from "./MenuSections.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default Vue.extend({
  data: () => ({
    loading: false,
    saving: false
  }),
  components: { MenuSections },
  created() {
    this.init();
  },
  computed: {
    ...mapState("menu", ["name"])
  },
  methods: {
    ...mapActions("menu", ["getMenu", "saveMenu"]),
    async init() {
      this.loading = true;
      try {
        await this.getMenu();
      } finally {
        this.loading = false;
      }
    },
    async handleSave() {
      this.saving = true;
      try {
        await this.saveMenu();
      } finally {
        this.saving = false;
      }
    }
  }
});
</script>


<style>
</style>
