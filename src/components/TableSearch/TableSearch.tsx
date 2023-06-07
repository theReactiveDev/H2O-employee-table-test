import { FC } from "react";

import { SearchIcon } from "../../icons";

import s from "./tableSearch.module.scss";

interface TableSearchProps {
  tableAmount: number;
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
}
const TableSearch: FC<TableSearchProps> = ({
  tableAmount,
  value,
  onChange,
  onClick,
}) => {
  return (
    <div className={s.container}>
      <div className={s.searchContent}>
        <div className={s.tableInfo}>
          {tableAmount} <span>Контактов</span>
        </div>
        <div className={s.searchInput}>
          <span className={s.icon}>
            <SearchIcon />
          </span>
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            placeholder="Поиск"
            className={s.input}
          />
        </div>
      </div>
      <button onClick={onClick} className={s.editButton}>
        Режим редактирования
      </button>
    </div>
  );
};

export default TableSearch;
