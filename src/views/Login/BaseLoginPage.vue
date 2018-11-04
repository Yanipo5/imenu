<template>
    <v-container fluid fill-height class="pa-0 indigo lighten-3" style="height:100vh">
        <v-layout align-center column>
            <h3 :class="titleClass" class="text-xs-center black--text">IMenu - Menu Creator</h3>
            <v-card class="elevation-24 pa-3" max-width="100%" width="500">
                <slot />
            </v-card>
        </v-layout>
    </v-container>
</template>

<script >
export default {
  computed: {
    titleClass() {
      const { xsOnly } = this.$vuetify.breakpoint;
      return {
        ["display-1"]: xsOnly,
        ["display-2 my-5"]: !xsOnly
      };
    }
  }
};
</script>

<style scoped>
</style>
