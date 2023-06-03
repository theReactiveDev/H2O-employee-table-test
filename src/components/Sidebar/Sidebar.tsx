import { FC } from "react";
import { Link } from "react-router-dom";
import { SidebarItem } from "../../shared/types/sidebar";

import s from "./sidebar.module.scss";

interface SidebarProps {
  links: SidebarItem[];
}

const Sidebar: FC<SidebarProps> = ({ links }) => {
  return (
    <nav className={s.sidebar}>
      <div className={s.container}>
        <ul className={s.links}>
          {links.map((item) => (
            <li key={item.index}>
              <Link to={item.link}>{item.image}</Link>
              {/* {item.image} */}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
