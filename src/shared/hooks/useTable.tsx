import { useMemo } from "react";
import { Employee } from "../types/employee";

interface DataObject {
  [key: string]: any;
}
export const useTableSort = (
  data: DataObject[],
  sort: string,
  sortOrder = true
) => {
  const sortedData = useMemo(() => {
    console.log("Старт функции сортировки");
    if (sort && data[0][sort]) {
      return [...data].sort((a, b) =>
        sortOrder ? (a[sort] > b[sort] ? 1 : -1) : a[sort] < b[sort] ? 1 : -1
      );
    } else return data;
  }, [sort, data, sortOrder]);

  return sortedData;
};

export const useTableFilter = (
  data: DataObject[],
  sort: string,
  query: string,
  sortOrder = true
) => {
  const sortedData = useTableSort(data, sort, sortOrder);
  const sortedAndFilteredData = useMemo(() => {
    return sortedData.filter((data) =>
      data.fullName.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedData]);

  return sortedAndFilteredData;
};
