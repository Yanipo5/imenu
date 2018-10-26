import { PageCategory } from "@/utils/types.ts";

export const pages: Array<PageCategory> = [
  {
    name: "Menu",
    path: "/menu",
    icon: "md restaurant_menu",
    children: [
      { name: "Edit", path: "/edit" },
      { name: "Preview", path: "/preview" }
    ]
  },
  {
    name: "Settings",
    path: "/settings",
    icon: "md settings",
    children: [{ name: "Menu", path: "/menu" }]
  }
];
