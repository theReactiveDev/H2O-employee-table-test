import { FC, useState } from "react";

import s from "./tableItem.module.scss";

interface TableItemProps {
  initialValue: string | number;
  type: string;
  onBlur: (value: string | number) => void;
}
const TableItem: FC<TableItemProps> = ({ initialValue, type, onBlur }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <input
      className={s.input}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      onBlur={() => onBlur(value)}
    />
  );
};

export default TableItem;
