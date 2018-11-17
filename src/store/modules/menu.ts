import { Section, SectionItem } from "@/utils/types.ts";
import client from "@/utils/graphql.ts";
import gql from "graphql-tag";

const { VUE_APP_STORAGE_MENU: storage } = process.env;
interface state {
  name: string;
  sections: Array<Section>;
}

const getInitalState = (): state => ({
  name: "Fancy Restaurant",
  sections: [
    {
      name: "Main Dishes",
      id: 1,
      order: 1,
      items: [
        {
          name: "Tasty Burger",
          id: 1,
          ingredientes: "",
          price: 45,
          order: 1
        },
        {
          name: "Pasta",
          id: 2,
          ingredientes: "",
          price: 35,
          order: 2
        },
        {
          name: "Saled",
          id: 3,
          ingredientes: "",
          price: 22,
          order: 3
        }
      ]
    },
    {
      name: "Wines",
      id: 2,
      order: 2,
      items: [
        {
          name: "Shardone",
          id: 1,
          ingredientes: "",
          price: 19,
          order: 1
        },
        {
          name: "Merlo",
          id: 2,
          ingredientes: "",
          price: 19,
          order: 2
        }
      ]
    }
  ]
});

export default {
  state: Object.assign(getInitalState(), {
    ...(getStorageMenu() && { sections: getStorageMenu() })
  }),
  getters: {
    menuSorted(s: state): Array<Section> {
      return s.sections
        .map(s => {
          s.items.sort((a, b) => a.order - b.order);
          return s;
        })
        .sort((a, b) => a.order - b.order);
    }
  },
  mutations: {
    addSection(s: state, { s_id, order }: { s_id: number; order: number }) {
      const newSection = Object.assign(getInitalState().sections[0], {
        id: s.sections[s.sections.length - 1].id + 1,
        order: order + 1
      });
      s.sections = [
        ...s.sections.map(s => {
          if (s.order > order) s.order++;
          return s;
        }),
        newSection
      ];
    },
    deleteSection(s: state, s_id: number) {
      s.sections = s.sections.filter(sec => sec.id !== s_id);
    },
    addSectionItem(
      s: state,
      { s_id, item }: { s_id: number; item: SectionItem }
    ): void {
      const { order } = item;
      s.sections = s.sections.map((s: Section) => {
        if (s.id !== s_id) return s;
        const newItem = Object.assign(getInitalState().sections[0].items[0], {
          order: order + 1,
          id: s.items[s.items.length - 1].id + 1
        });
        s.items = [
          ...s.items.map((i: SectionItem) => {
            if (i.order > order) i.order++;
            return i;
          }),
          newItem
        ];
        return s;
      });
    },

    deleteSectionItem(
      s: state,
      { s_id, i_id }: { s_id: number; i_id: number }
    ) {
      s.sections = s.sections.map((s: Section) => {
        if (s.id !== s_id) return s;
        s.items = s.items.filter((i: SectionItem) => i.id !== i_id);
        return s;
      });
    },
    resetMenu(s: state): void {
      const menu = getStorageMenu();
      if (!menu) return;
      s.sections = menu;
    },
    setMenu(s: state, menu: state): void {
      Object.assign(s, menu);
    }
  },
  actions: {
    async saveMenu({ state, rootState }: { state: state; rootState: any }) {
      const { id } = rootState.user;
      const res = await client.mutate({
        mutation: gql`
          mutation($id: String!, $menu: String!) {
            setUserMenu(id: $id, menu: $menu) {
              id
            }
          }
        `,
        variables: {
          id,
          menu: JSON.stringify(state)
        }
      });
      if (!res || !res.data || !res.data.user) return false;
      return true;
    },
    async getMenu({ rootState, commit }: { rootState: any; commit: Function }) {
      const { id } = rootState.user;
      const res = await client.query({
        query: gql`
          query($id: String!) {
            user(id: $id) {
              menu
            }
          }
        `,
        variables: { id }
      });
      //@ts-ignore
      if (!res || !res.data || !res.data.user || !res.data.user.menu)
        return false;
      //@ts-ignore
      commit("setMenu", JSON.parse(res.data.user.menu));
      return true;
    }
  }
};

function getStorageMenu(): Array<Section> | null {
  const raw = localStorage.getItem(storage);
  if (!raw) return null;
  return JSON.parse(raw);
}
