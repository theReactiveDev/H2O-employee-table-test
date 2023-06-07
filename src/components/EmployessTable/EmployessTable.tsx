import { FC, useState, useEffect, ChangeEventHandler } from "react";
import Pagination from "rc-pagination";

import TableItem from "../TableItem/TableItem";
import SortButton from "../SortButton/SortButton";

import { useTableFilter } from "../../shared/hooks/useTable";

import { editTableData, getEmployess } from "../../shared/helpers/tableData";
import { getPaginationInfo } from "../../shared/helpers/pagination";
import { formatTableDate } from "../../shared/helpers/dateTransform";

import { Employee } from "../../shared/types/employee";

import { EmployessMock } from "../../shared/mocks/employessMock";

import { PaginationIcon } from "../../icons";

import s from "./employessTable.module.scss";

interface EmployessTableProps {
  search: string;
  editTable: boolean;
}

const EmployessTable: FC<EmployessTableProps> = ({ search, editTable }) => {
  const Employess: Employee[] = getEmployess(100, EmployessMock);

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
    setSortKey(sort);
    // setSortOrder((prev) => !prev);
    setSortOrder(order);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setRowPerPage(Number(e.target.value));
  };
  const handleDataEdit = (
    key: string,
    index: number,
    value: string | number
  ) => {
    const editData = editTableData(tableData, key, index, value) as Employee[];

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
              <div className={s.headerSort}>
                Имя сотрудника{" "}
                <SortButton
                  onClick={(order) => handleSortClick("fullName", order)}
                />
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
              <div className={s.headerSort}>
                Пол{" "}
                <SortButton
                  onClick={(order) => handleSortClick("gender", order)}
                />
              </div>
            </th>
            <th>Дата рождения</th>
            <th>
              <div className={s.headerSort}>
                Метро{" "}
                <SortButton
                  onClick={(order) => handleSortClick("metro", order)}
                />
              </div>
            </th>
            <th>Адрес проживания</th>
            <th>
              <div className={s.headerSort}>
                Банк{" "}
                <SortButton
                  onClick={(order) => handleSortClick("bank", order)}
                />
              </div>
            </th>
            <th>Номер карты</th>
            <th>
              <div className={s.headerSort}>
                Гражданство
                <SortButton
                  onClick={(order) => handleSortClick("citizenship", order)}
                />
              </div>
            </th>
            <th>Паспорт</th>
            <th>Кем выдан</th>
            <th>Срок действия</th>
            <th>Место рождения</th>
            <th>Адрес прописки</th>
            <th>
              <div className={s.headerSort}>
                Патент
                <SortButton
                  onClick={(order) => handleSortClick("patent", order)}
                />
              </div>
            </th>
            <th>Срок действия</th>
            <th>СНИЛС</th>
            <th>ИНН</th>
            <th>Мед. книжка</th>
            <th>
              <div className={s.headerSort}>
                Должность
                <SortButton
                  onClick={(order) => handleSortClick("position", order)}
                />
              </div>
            </th>
            <th>
              <div className={s.headerSort}>
                Подразделение
                <SortButton
                  onClick={(order) => handleSortClick("unit", order)}
                />
              </div>
            </th>
            <th>
              <div className={s.headerSort}>
                Решение
                <SortButton
                  onClick={(order) => handleSortClick("decision", order)}
                />
              </div>
            </th>
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
              <td>
                {editTable ? (
                  <TableItem
                    initialValue={employee.phoneNumber}
                    type="number"
                    onBlur={(value) =>
                      handleDataEdit("phoneNumber", index, value)
                    }
                  />
                ) : (
                  employee.phoneNumber
                )}
              </td>
              {/* TODO: add edit feature for other datatypes */}
              <td>{employee.gender}</td>
              <td>{formatTableDate(employee.birthDate)}</td>
              <td>
                {editTable ? (
                  <TableItem
                    initialValue={employee.metro}
                    type="text"
                    onBlur={(value) => handleDataEdit("metro", index, value)}
                  />
                ) : (
                  employee.metro
                )}
              </td>
              <td>
                {editTable ? (
                  <TableItem
                    initialValue={employee.address}
                    type="text"
                    onBlur={(value) => handleDataEdit("address", index, value)}
                  />
                ) : (
                  employee.address
                )}
              </td>
              <td>{employee.bank}</td>
              <td>{employee.paymentСard}</td>
              <td>{employee.citizenship}</td>
              <td>{employee.passport}</td>
              <td>{employee.issuedBy}</td>
              <td>{formatTableDate(employee.validTill)}</td>
              <td>
                {editTable ? (
                  <TableItem
                    initialValue={employee.birthplace}
                    type="text"
                    onBlur={(value) =>
                      handleDataEdit("birthplace", index, value)
                    }
                  />
                ) : (
                  employee.birthplace
                )}
              </td>
              <td>
                {editTable ? (
                  <TableItem
                    initialValue={employee.registration}
                    type="text"
                    onBlur={(value) =>
                      handleDataEdit("registration", index, value)
                    }
                  />
                ) : (
                  employee.registration
                )}
              </td>
              <td>{employee.patent ? employee.patent : "-"}</td>
              <td>
                {employee.patentValidDate
                  ? formatTableDate(employee.patentValidDate)
                  : "-"}
              </td>
              <td>{employee.snils ? employee.snils : "-"}</td>
              <td>{employee.inn ? employee.inn : "-"}</td>
              <td>{employee.medicalBook ? employee.medicalBook : "-"}</td>
              <td>{employee.position}</td>
              <td>{employee.unit}</td>
              <td>{employee.decision}</td>
              <td>{employee.source ? employee.source : "-"}</td>
              <td>{employee.date}</td>
              <td>
                {editTable ? (
                  <TableItem
                    initialValue={employee.note}
                    type="text"
                    onBlur={(value) => handleDataEdit("note", index, value)}
                  />
                ) : (
                  employee.note
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={11}>
              <div className={s.tableFooter}>
                <span>
                  {getPaginationInfo(
                    sortedTableData.length,
                    rowPerPage,
                    currentPage
                  )}
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
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default EmployessTable;
