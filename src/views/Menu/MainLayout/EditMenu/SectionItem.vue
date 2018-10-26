<template>
    <v-container grid-list-lg class="pt-0 px-3">
        <v-form v-model="isFormValid">
            <v-layout row wrap class="item-border pt-3">
                <v-flex xs9>
                    <v-text-field label="Enter Item Name" class="pt-0 mt-0" :rules="[rules.requried]" :autofocus="isFocus" />
                </v-flex>
                <v-flex xs3>
                    <v-text-field label="Enter Price" type="number" class="pt-0 mt-0" :rules="[rules.requried]" />
                </v-flex>
                <v-flex xs9>
                    <v-text-field label="Enter Ingredientes" class="pt-0 mt-0" />
                </v-flex>

                <v-flex xs3>
                    <v-layout row wrap justify-center>
                        <v-btn icon class="error" @click="$emit('delete',item)">
                            <v-icon>delete</v-icon>
                        </v-btn>
                        <v-btn icon class="info" @click="$emit('add',item)">
                            <v-icon>add</v-icon>
                        </v-btn>
                        <v-btn icon class="success" @click="$emit('save',item)">
                            <v-icon :disabled="!isFormValid">done</v-icon>
                        </v-btn>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-form>
    </v-container>
</template>

<script lang="ts">
import rules from "@/utils/rules.ts";
import Vue from "vue";
export default Vue.extend({
  props: ["s_id, i_id, length"],
  data: () => ({
    rules,
    isFocus: false,
    isFormValid: false
  }),
  created() {
    this.isFocus = true;
  }
});
</script>

<style scoped>
.item-border {
  border: 1px dashed;
}
</style>
