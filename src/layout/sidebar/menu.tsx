interface MenuItem {
  label: string;
  route: string;
  children?: MenuItem[];
}

interface SidebarItem {
  name: string;
  menu_items: MenuItem[];
}

const sidebar_items: SidebarItem[] = [
  {
    name: "",
    menu_items: [
      {
        label: "Home",
        route: "/",
      },
      {
        label: "Unity",
        route: "",
        children: [
          //{ label: "Launchpad", route: "/launchpad" },
          { label: "Tokens", route: "/tokens" },
          { label: "Pools", route: "/pools" },
          { label: "Curators", route: "/curators" },
        ]
      },
      //{
      //  label: "Cardano News",
      //  route: "/news",
      //},
      {
        label: "Development",
        route: "/development",
      },
    ],
  },
];

export default sidebar_items;