import {
  Home,
  Search,
  GraduationCap,
  BriefcaseBusiness,
  User,
  Trophy,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/home",
          label: "Home",
          active: pathname.includes("/home"),
          icon: Home,
          submenus: []
        },
        {
          href: "/search",
          label: "Search (Not Implemented Yet)",
          active: pathname.includes("/search"),
          icon: Search,
          submenus: []
        },
        {
          href: "/learn",
          label: "Learning",
          active: pathname.includes("/learn"),
          icon: GraduationCap,
          submenus: []
        },
        {
          href: "",
          label: "Jobs",
          active: pathname.includes("/jobs"),
          icon: BriefcaseBusiness,
          submenus: [
            {
              href: "/jobs/search",
              label: "Jobs Search (Not Implemented Yet)",
              active: pathname === "/jobs/search"
            },
            {
              href: "/jobs/clinic",
              label: "Career Clinic",
              active: pathname === "/jobs/clinic"
            }
          ]
        },
        {
          href: "/profile",
          label: "Profile (Not Implemented Yet)",
          active: pathname.includes("/profile"),
          icon: User,
          submenus: []
        },
      ]
    }
  ]
}
