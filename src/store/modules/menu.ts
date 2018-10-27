import { Section, SectionItem } from "@/utils/types.ts";

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
          price: 10,
          order: 1
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
          price: 10,
          order: 1
        },
        {
          name: "Merlo",
          id: 2,
          ingredientes: "",
          price: 10,
          order: 2
        }
      ]
    }
  ]
});

export default {
  state: getInitalState(),
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
    }
  }
};
