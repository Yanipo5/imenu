<template>
    <v-layout row justify-center>
        <v-btn icon class="error" :disabled="isDisabled" @click.stop="$emit('delete')">
            <v-icon>delete</v-icon>
        </v-btn>
        <v-btn icon class="info" @click.stop="$emit('add')">
            <v-icon>add</v-icon>
        </v-btn>
    </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["isDisabled"]
});
</script>

<style>
</style>
