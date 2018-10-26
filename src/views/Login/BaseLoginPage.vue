<template>
    <v-container fluid fill-height class="pa-0 indigo lighten-3" style="height:100vh">
        <v-layout align-center column>
            <h3 class="display-2 my-5 black--text">IMenu - Menu Creator</h3>
            <v-card width="500" class="elevation-24 pa-3">
                <slot />
            </v-card>
        </v-layout>
    </v-container>
</template>

<script >
export default {};
</script>

<style scoped>
</style>
