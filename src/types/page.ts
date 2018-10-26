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
