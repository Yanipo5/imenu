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
import { mapState } from "vuex";

export default Vue.extend({
  data: () => ({ isShow: false }),
  components: { AppNavigation, AppBar }
});
</script>
