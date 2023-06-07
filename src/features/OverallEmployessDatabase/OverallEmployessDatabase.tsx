import { useState } from "react";
import EmployessTable from "../../components/EmployessTable/EmployessTable";
import TableSearch from "../../components/TableSearch/TableSearch";

import s from "./overallEmployessDatabase.module.scss";

export const OverallEmployessDatabase = () => {
  const [searchString, setSearchString] = useState<string>("");
  return (
    <div>
      <h1 className={s.contentHeader}>Календарь сотрудников</h1>
      <TableSearch
        tableAmount={500}
        value={searchString}
        onChange={(value) => setSearchString(value)}
      />
      <EmployessTable search={searchString} />
    </div>
  );
};
