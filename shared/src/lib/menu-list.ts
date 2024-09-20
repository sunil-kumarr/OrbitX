import {
  Bookmark,
  LayoutGrid,
  LucideIcon,
  School,
  NewspaperIcon,
  BookA,
  UserRoundPlus,
  ReceiptIndianRupee,
  BookUser,
  ChartColumnIncreasingIcon,
  FileChartColumn,
  LayoutListIcon,
} from 'lucide-react';

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
      groupLabel: '',
      menus: [
        {
          href: '/home',
          label: 'Home',
          active: pathname.includes('/home'),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'School Management',
      menus: [
        {
          href: '/myschool',
          label: 'My School',
          active: pathname.includes('/myschool'),
          icon: School,
          submenus: [
            {
              href: '/myschool/students',
              label: 'Students',
              active: pathname === '/myschool/students',
              icon: Bookmark,
            },
            {
              href: '/myschool//parents/',
              label: 'Parents',
              active: pathname === '/myschool//parents',
              icon: Bookmark,
            },
            {
              href: '/rooms/',
              label: 'Rooms',
              active: pathname === '/rooms',
              icon: Bookmark,
            },
            {
              href: '/calendar/',
              label: 'Calendar',
              active: pathname === '/calendar',
              icon: Bookmark,
            },
            {
              href: '/schedules/',
              label: 'Schedules',
              active: pathname === '/schedules',
              icon: Bookmark,
            },
            {
              href: '/food/menu/',
              label: 'Food Menu',
              active: pathname === '/food/menu',
              icon: Bookmark,
            },
            {
              href: '/settings/',
              label: 'Settings',
              active: pathname === '/settings',
              icon: Bookmark,
            },
          ],
        },
        {
          href: '/admissions',
          label: 'Admissions',
          active: pathname.includes('/admissions'),
          icon: UserRoundPlus,
          submenus: [],
        },
        {
          href: '/paperwork',
          label: 'Paperwork',
          active: pathname.includes('/paperwork'),
          icon: NewspaperIcon,
          submenus: [],
        },
        {
          href: '/learning',
          label: 'Learning',
          active: pathname.includes('/learning'),
          icon: BookA,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Finance',
      menus: [
        {
          href: '/billing',
          label: 'Billing',
          active: pathname.includes('/billing'),
          icon: ReceiptIndianRupee,
          submenus: [],
        },
        {
          href: '/expenses',
          label: 'Expenses',
          active: pathname.includes('/staff/all'),
          icon: LayoutListIcon,
          submenus: [],
        },
        {
          href: '/staff/all',
          label: 'Staff & Payroll',
          active: pathname.includes('/staff/all'),
          icon: BookUser,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Reports',
      menus: [
        {
          href: '/reports',
          label: 'Reports',
          active: pathname.includes('/reports'),
          icon: ChartColumnIncreasingIcon,
          submenus: [],
        },
        {
          href: '/reports/custom',
          label: 'Custom Reports',
          active: pathname.includes('/reports/custom'),
          icon: FileChartColumn,
          submenus: [],
        },
      ],
    },
  ];
}
