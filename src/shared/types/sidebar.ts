import { ReactNode } from "react";

export interface SidebarItem {
  index: number;
  title: string;
  link: string;
  image: ReactNode;
}
