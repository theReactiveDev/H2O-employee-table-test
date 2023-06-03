import {
  CalendarIcon,
  DBIcon,
  EmployeesIcon,
  InventoryIcon,
  OrdersIcon,
  SettingsIcon,
  StatisticIcon,
} from "../../icons";

import { SidebarItem } from "../types/sidebar";

export const SidebarLinksConstant: SidebarItem[] = [
  {
    index: 0,
    title: "Календарь",
    link: "/calendar",
    image: <CalendarIcon />,
  },
  {
    index: 1,
    title: "Заказы",
    link: "/orders",
    image: <OrdersIcon />,
  },
  {
    index: 2,
    title: "Склад",
    link: "/inventory",
    image: <InventoryIcon />,
  },
  {
    index: 3,
    title: "Сотрудники",
    link: "/employees",
    image: <EmployeesIcon />,
  },
  {
    index: 4,
    title: "База данных",
    link: "/database",
    image: <DBIcon />,
  },
  {
    index: 5,
    title: "Аналитика продаж",
    link: "/sales_analytics",
    image: <StatisticIcon />,
  },
  {
    index: 6,
    title: "Настройки",
    link: "/settings",
    image: <SettingsIcon />,
  },
];
