<template>
    <v-container>
        <v-layout row align-baseline>
            <v-flex xs10>
                <h6 class="title mb-3 text-xs-center">{{name}}</h6>
            </v-flex>
            <v-flex xs2>
                <v-layout column>
                    <v-switch v-model="isSelectedOnly" :prepend-icon="icon" :hint="'selected'" class="mt-0 pt-0" />
                    <div>Total: {{totalOrderCost}} {{currency}}</div>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm6 v-for="s in menuSorted" :key="s.id">
                <h5 class="subheading font-weight-bold">{{s.name}}</h5>
                <v-container grid-list-xl>
                    <v-layout row v-for="i in s.items" :key="i.id" justify-space-between v-show="!isSelectedOnly || isSelected(s.id,i.id)" align-baseline>
                        <div>
                            <span class="mr-2">
                                <v-icon v-show="!isSelected(s.id,i.id)" size="20" @click="toggleStar(s.id,i.id)">star_border</v-icon>
                                <v-icon v-show="isSelected(s.id,i.id)" size="20" @click="toggleStar(s.id,i.id)">star</v-icon>
                            </span>
                            <span>{{i.name}}</span>
                        </div>
                        <v-spacer class="ml-3" style="border-bottom:1px dashed" />
                        <div class="text-spacer">{{i.price}} {{currency}}</div>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
import { Section, SectionItem } from "@/utils/types.ts";
export default Vue.extend({
  data: () => ({
    starObj: {},
    isSelectedOnly: false
  }),
  computed: {
    ...mapState("menu", ["name"]),
    ...mapState("menuSetting", ["currency"]),
    ...mapGetters("menu", ["menuSorted"]),
    icon(): string {
      return this.isSelectedOnly ? "star" : "star_border";
    },
    totalOrderCost(): number {
      // @ts-ignore
      return this.menuSorted.reduce((sum: number, s: Section) => {
        return (
          sum +
          s.items.reduce((i_sum: number, i: SectionItem) => {
            const s_id = `s${s.id}`;
            const i_id = `i${i.id}`;
            const add =
              // @ts-ignore
              this.starObj[s_id] && this.starObj[s_id][i_id] ? i.price : 0;
            return i_sum + add;
          }, 0)
        );
      }, 0);
    }
  },
  methods: {
    toggleStar(s_id: number, i_id: number): void {
      const s = `s${s_id}`;
      const i = `i${i_id}`;
      // @ts-ignore
      if (!this.starObj[s]) Vue.set(this.starObj, s, {});
      // @ts-ignore
      if (!this.starObj[s][i]) Vue.set(this.starObj[s], i, true);
      // @ts-ignore
      else Vue.set(this.starObj[s], i, false);
    },
    isSelected(s_id: number, i_id: number): boolean {
      const s = `s${s_id}`;
      const i = `i${i_id}`;
      // @ts-ignore
      return this.starObj[s] && this.starObj[s][i];
    }
  }
});
</script>

<style scoped>
.text-spacer {
  flex: 0 0 40px;
  text-align: right;
}
</style>
