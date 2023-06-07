import { FC, useState } from "react";

interface TableItemProps {
  initialValue: string | number;
  type: string;
  onBlur: (value: string | number) => void;
  //   isEditable: boolean;
}
const TableItem: FC<TableItemProps> = ({ initialValue, type, onBlur }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      onBlur={() => onBlur(value)}
    />
  );
};

export default TableItem;
