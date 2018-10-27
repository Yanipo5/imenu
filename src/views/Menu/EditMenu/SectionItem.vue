<template>
    <v-container grid-list-lg class="pt-0 px-3">
        <v-form v-model="isFormValid">
            <v-layout row wrap class="item-border pt-3">
                <v-flex xs9>
                    <v-text-field v-model="item.name" label="Item Name" class="pt-0 mt-0" :rules="[rules.requried]" :autofocus="isFocus" />
                </v-flex>
                <v-flex xs3>
                    <v-text-field v-model="item.price" label="Item Price" type="number" class="pt-0 mt-0" :rules="[rules.requried]" />
                </v-flex>
                <v-flex xs9>
                    <v-text-field v-model="item.ingredientes" label="Item Ingredientes" class="pt-0 mt-0" />
                </v-flex>

                <v-flex xs3>
                    <v-layout row wrap justify-center>
                        <v-btn icon class="error" :disabled="isDisabled" @click="deleteSectionItem({s_id, i_id:item.id})">
                            <v-icon>delete</v-icon>
                        </v-btn>
                        <v-btn icon class="info" @click="addSectionItem({item,s_id})">
                            <v-icon>add</v-icon>
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
import { mapMutations } from "vuex";
export default Vue.extend({
  props: ["item", "s_id", "s_length"],
  data: () => ({
    rules,
    isFocus: false,
    isFormValid: false
  }),
  created() {
    this.isFocus = true;
  },
  computed: {
    isDisabled(): boolean {
      return this.s_length === 1;
    }
  },
  methods: {
    ...mapMutations("menu", ["addSectionItem", "deleteSectionItem"]),
    handleAdd() {},
    handleDelete() {}
  }
});
</script>

<style scoped>
.item-border {
  border: 1px dashed;
}
</style>
