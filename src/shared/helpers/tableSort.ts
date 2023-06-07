import { DataObject } from "../types";

export const tableSort = (
  data: DataObject[],
  sort: string,
  sortOrder = true
) => {
  let sortedData = [];
  if (sort && data[0][sort]) {
    sortedData = [...data].sort((a, b) =>
      sortOrder ? (a[sort] > b[sort] ? 1 : -1) : a[sort] < b[sort] ? 1 : -1
    );
  } else return data;

  return sortedData;
};
