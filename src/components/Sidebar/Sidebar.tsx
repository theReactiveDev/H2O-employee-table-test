import { FC, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { SidebarItem } from "../../shared/types/sidebar";

import { CompanyLogo } from "../../icons";

import s from "./sidebar.module.scss";

interface SidebarProps {
  links: SidebarItem[];
}

const Sidebar: FC<SidebarProps> = ({ links }) => {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  return (
    <nav className={s.sidebar}>
      <div className={s.container}>
        <div className={s.logo}>
          <Link to="/">
            <CompanyLogo />
          </Link>
        </div>
        <ul className={s.links}>
          {links.map((item) => (
            <li
              key={item.index}
              className={cn(s.link, { [s.active]: activeLink === item.index })}
              onClick={() => setActiveLink(item.index)}
            >
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
