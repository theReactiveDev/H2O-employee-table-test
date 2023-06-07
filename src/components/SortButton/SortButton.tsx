import { useState, FC } from "react";
import cn from "classnames";

import { SortIcon } from "../../icons";

import s from "./sortButton.module.scss";
import { Employee } from "../../shared/types/employee";

interface SortButtonProps {
  onClick?: (order: boolean) => void;
}
const SortButton: FC<SortButtonProps> = ({ onClick }) => {
  const [sortOrder, setSortOrder] = useState<boolean>(true);

  const sortClickHandler = () => {
    onClick?.(sortOrder);
    setSortOrder((prev) => !prev);
  };
  return (
    <div onClick={sortClickHandler} className={s.button}>
      <SortIcon className={cn(s.icon, sortOrder ? s.desc : s.asc)} />
    </div>
  );
};

export default SortButton;
