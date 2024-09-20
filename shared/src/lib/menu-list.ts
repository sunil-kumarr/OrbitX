import {
    Tag,
    Users,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
    LucideIcon,
  } from "lucide-react";
  
  type Submenu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon;
  };
  
  type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon;
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
            icon: LayoutGrid,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "School Management",
        menus: [
          {
            href: "",
            label: "My School",
            active: pathname.includes("/school"),
            icon: SquarePen,
            submenus: [
              {
                href: "/students",
                label: "Students",
                active: pathname === "/students",
                icon: Bookmark,
              },
              {
                href: "/parents/",
                label: "Parents",
                active: pathname === "/parents",
                icon: Bookmark ,
              },
              {
                href: "/rooms/",
                label: "Rooms",
                active: pathname === "/rooms",
                icon: Bookmark,
              },
              {
                href: "/calendar/",
                label: "Calendar",
                active: pathname === "/calendar",
                icon: Bookmark,
              },
              {
                href: "/schedules/",
                label: "Schedules",
                active: pathname === "/schedules",
                icon: Bookmark,
              },
              {
                href: "/food/menu/",
                label: "Food Menu",
                active: pathname === "/food/menu",
                icon: Bookmark,
              },
              {
                href: "/settings/",
                label: "Settings",
                active: pathname === "/settings",
                icon: Bookmark,
              }
            ]
          },
          {
            href: "/admissions",
            label: "Admissions",
            active: pathname.includes("/admissions"),
            icon: Bookmark,
            submenus: []
          },
          {
            href: "/paperwork",
            label: "Paperwork",
            active: pathname.includes("/paperwork"),
            icon: Tag,
            submenus: []
          },
          {
            href: "/learning",
            label: "Learning",
            active: pathname.includes("/learning"),
            icon: Tag,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Finance",
        menus: [
          {
            href: "/billing",
            label: "Billing",
            active: pathname.includes("/billing"),
            icon: Users,
            submenus: []
          },
          {
            href: "/expenses",
            label: "Expenses",
            active: pathname.includes("/staff/all"),
            icon: Settings,
            submenus: []
          },
          {
            href: "/staff/all",
            label: "Staff & Payroll",
            active: pathname.includes("/staff/all"),
            icon: Settings,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Reports",
        menus: [
          {
            href: "/reports",
            label: "Reports",
            active: pathname.includes("/reports"),
            icon: Users,
            submenus: []
          },
          {
            href: "/reports/custom",
            label: "Custom Reports",
            active: pathname.includes("/reports/custom"),
            icon: Settings,
            submenus: []
          }
        ]
      }
    ];
  }