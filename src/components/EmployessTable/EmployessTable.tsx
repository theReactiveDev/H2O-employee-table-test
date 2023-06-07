import { FC, useState, useEffect, ChangeEventHandler } from "react";
import Pagination from "rc-pagination";
import cn from "classnames";

import SortButton from "../SortButton/SortButton";

import { useTableFilter } from "../../shared/hooks/useTable";

import { editTableData, getEmployess } from "../../shared/helpers/tableData";
import { getPaginationInfo } from "../../shared/helpers/pagination";

import { DataObject } from "../../shared/types";
import { Employee } from "../../shared/types/employee";

import { EmployessMock } from "../../shared/mocks/employessMock";

import { PaginationIcon } from "../../icons";

import s from "./employessTable.module.scss";
import { format, set } from "date-fns";
import { formatTableDate } from "../../shared/helpers/dateTransform";
import TableItem from "../TableItem/TableItem";

interface EmployessTableProps {
  search: string;
  editTable: boolean;
}

const EmployessTable: FC<EmployessTableProps> = ({ search, editTable }) => {
  const Employess: Employee[] = getEmployess(10, EmployessMock);

  const [sortKey, setSortKey] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<boolean>(true);
  const [tableData, setTableData] = useState<Employee[]>(Employess);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowPerPage, setRowPerPage] = useState<number>(5);

  let sortedTableData = useTableFilter(
    tableData,
    sortKey,
    search,
    sortOrder
  ) as Employee[];

  const [pageData, setPageData] = useState<Employee[]>(
    sortedTableData.slice(0, rowPerPage)
  );
  console.log("sorted data", sortedTableData);
  console.log("data", tableData);

  useEffect(() => {
    if (sortedTableData.length && currentPage == 0) {
      setCurrentPage(1);
    }
    if (currentPage * rowPerPage > sortedTableData.length) {
      setCurrentPage(Math.ceil(sortedTableData.length / rowPerPage));
    }
    console.log(currentPage);
    const firstRow = (currentPage - 1) * rowPerPage;
    const lastRow = currentPage * rowPerPage;
    setPageData(sortedTableData.slice(firstRow, lastRow));
  }, [currentPage, rowPerPage, sortedTableData]);

  const handleSortClick = (sort: string, order: boolean) => {
    console.log(sort, order);
    setSortKey(sort);
    // setSortOrder((prev) => !prev);
    setSortOrder(order);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    // console.log(Number(e.target.value));
    setRowPerPage(Number(e.target.value));
  };
  const handleDataEdit = (
    key: string,
    index: number,
    value: string | number
  ) => {
    const editData = editTableData(tableData, key, index, value) as Employee[];
    // sortedTableData = editData
    // console.log("edit", editData);
    setTableData(editData);
  };

  return (
    <div className={s.tableContainer}>
      <table className={s.table}>
        <thead>
          <tr>
            <th rowSpan={2}>№</th>
            <th rowSpan={2}>
              {" "}
              <div
                className={s.headerSort}
                // onClick={() =>
                // //   handleSortClick(tableData, "fullName", sortOrder)
                // }
              >
                Имя сотрудника <SortButton />
                {/* <SortIcon className={cn(s.icon, sortOrder ? s.desc : s.asc)} /> */}
              </div>
            </th>
            <th colSpan={6}>Основная информация</th>
            <th colSpan={2}>Банковская информация</th>
            <th colSpan={11}>Докумeнты сотрудника</th>
            <th colSpan={6}>Информация от HR</th>
          </tr>
          <tr>
            <th>ID номер</th>
            <th>Телефон</th>
            <th>
              <div
                className={s.headerSort}
                // onClick={() => handleSortClick("gender")}
              >
                Пол{" "}
                <SortButton
                  onClick={(order) => handleSortClick("gender", order)}
                />
                {/* <SortIcon className={cn(s.icon, sortOrder ? s.desc : s.asc)} /> */}
              </div>
            </th>
            <th>Дата рождения</th>
            <th>Метро</th>
            <th>Адрес проживания</th>
            <th>Банк</th>
            <th>Номер карты</th>
            <th>Гражданство</th>
            <th>Паспорт</th>
            <th>Кем выдан</th>
            <th>Срок действия</th>
            <th>Место рождения</th>
            <th>Адрес прописки</th>
            <th>Патент</th>
            <th>Срок действия</th>
            <th>СНИЛС</th>
            <th>ИНН</th>
            <th>Мед. книжка</th>
            <th>Должность</th>
            <th>Подразделение</th>
            <th>Решение</th>
            <th>Источник</th>
            <th>Дата</th>
            <th>Примечание</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((employee, index) => (
            <tr key={employee.id}>
              <td>{(currentPage - 1) * rowPerPage + (index + 1)}</td>
              <td>
                {editTable ? (
                  <TableItem
                    initialValue={employee.fullName}
                    type="text"
                    onBlur={(value) => handleDataEdit("fullName", index, value)}
                  />
                ) : (
                  employee.fullName
                )}
              </td>
              <td>{employee.id}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.gender}</td>
              <td>{employee.birthDate.toString()}</td>
              <td>{employee.metro}</td>
              <td>{employee.address}</td>
              <td>{employee.bank}</td>
              <td>{employee.paymentСard}</td>
              <td>{employee.citizenship}</td>
              <td>{employee.passport}</td>
              <td>{employee.issuedBy}</td>
              <td>{employee.validTill.toDateString()}</td>
              <td>{employee.birthplace}</td>
              <td>{employee.registration}</td>
              <td>{employee.patent}</td>
              <td>{formatTableDate(employee.patentValidDate)}</td>
              <td>{employee.snils}</td>
              <td>{employee.inn}</td>
              <td>{employee.medicalBook}</td>
              <td>{employee.position}</td>
              <td>{employee.unit}</td>
              <td>{employee.decision}</td>
              <td>{employee.source}</td>
              <td>{employee.date}</td>
              <td>{employee.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className={s.tableWrapper}> */}
      <div className={s.tableFooter}>
        <span>
          {getPaginationInfo(sortedTableData.length, rowPerPage, currentPage)}
        </span>

        <Pagination
          className={s.pagination}
          total={sortedTableData.length}
          current={currentPage}
          onChange={handlePageChange}
          pageSize={rowPerPage}
          showTitle={false}
          prevIcon={<PaginationIcon className={s.prev} />}
          nextIcon={<PaginationIcon className={s.next} />}
          jumpPrevIcon={"..."}
          jumpNextIcon={"..."}

          // showTotal={(total, range) =>
          //   `${range[0]} - ${range[1]} of ${total} items`
          // }
        />

        <div className={s.pageRowsChanger}>
          <span>отображать на странице</span>
          <select
            className={s.rowsSelect}
            value={rowPerPage}
            onChange={handleSelectChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default EmployessTable;
