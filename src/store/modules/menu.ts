import { Section, SectionItem } from "@/utils/types.ts";

interface state {
  name: string;
  sections: Array<Section>;
}

const getInitalState = (): state => ({
  name: "",
  sections: [
    {
      name: "Main Section",
      id: 1,
      order: 1,
      items: [
        {
          name: "name",
          id: 1,
          ingredientes: "",
          price: 10,
          order: 1
        }
      ]
    }
  ]
});

export default {
  state: getInitalState(),
  getters: {
    getMenuSection: ({ sections }: state) => (
      s_id: number
    ): Section | undefined => sections.find(s => s.id === s_id),
    getMenuItem: (
      s: state,
      { getMenuSection }: { getMenuSection: ((id: number) => Section) }
    ) => (s_id: number, i_id: number): SectionItem | undefined => {
      const section = getMenuSection(s_id);
      if (!section) return;
      return section.items.find((i: SectionItem) => i.id === i_id);
    }
  },
  mutations: {
    addSectionItem(s: state, id: number) {},
    saveSectionItem(s: state, sec: Section) {},
    deleteSectionItem(s: state, id: Section) {}
  }
};
