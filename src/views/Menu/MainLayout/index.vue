<template>
  <div>
    <AppBar />
    <AppNavigation />
    <v-content>
      <router-view />
    </v-content>
  </div>
</template>

<script>
import Vue from "vue";
import AppNavigation from "./AppNavigation";
import AppBar from "./AppBar";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  data: () => ({ isShow: false }),
  components: { AppNavigation, AppBar },
  methods: {
    ...mapMutations("appLayout", ["toggleNavigationDrawer"])
  },
  created() {
    if (this.$vuetify.breakpoint.mdAndUp) this.toggleNavigationDrawer();
  }
});
</script>
