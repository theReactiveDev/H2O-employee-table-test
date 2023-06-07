export const getPaginationInfo = (
  dataLength: number,
  itemsPerPage: number,
  currentPage: number
) => {
  let firstItem = 0;
  let lastItem = 0;
  if (dataLength != 0) {
    firstItem = (currentPage - 1) * itemsPerPage + 1;
    lastItem = currentPage * itemsPerPage;
  }
  return `показано ${firstItem} - ${lastItem} из ${dataLength} результатов `;
};
