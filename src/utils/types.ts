export interface VueXcontext {
  state: Object;
  rootState: Object;
  getters: Object;
  rootGetters: Object;
  commit: Object;
  dispacth: Object;
}

export interface PageCategory {
  name: string;
  path: string;
  icon: string;
  children: Array<Page>;
}

export interface Page {
  name: string;
  path: string;
}

export interface Section {
  name: string;
  id: number;
  order: number;
  items: Array<SectionItem>;
}

export interface SectionItem {
  name: string;
  id: number;
  ingredientes: string;
  price: number;
  order: number;
}
