import { fakerRU } from "@faker-js/faker";

import { DataObject } from "../types";
import { Employee } from "../types/employee";

export const editTableData = (
  data: DataObject[],
  key: string,
  index: number,
  value: string | number
) => {
  const editData = data;
  editData[index][key] = value;
  return editData;
};

// const editData = (data: Employee[], key: keyof Employee, index: number, value: string|number,  result: (value: Employee[]) => void ) =>{
// 	const tableData = data
// 	tableData[index][key] = value
// 	result( tableData  )
//  }

// export const getEmployess = (count: number) => {
//   function createEmployee(): Employee {
//     return {

//       id: fakerRU.datatype.number(5000),
//       phoneNumber: fakerRU.phone.number("89#########"),
//       gender: fakerRU.person.sexType(),
// 	  fullName: fakerRU.person.fullName(gender),
//       birthDate: fakerRU.date.birthdate(),
//       paymentСard: fakerRU.finance.creditCardNumber(),
//     };
//   }
// };
function createEmployeeNameAndSex() {
  const sex = fakerRU.person.sexType();
  const fullName = fakerRU.person.fullName({ sex });
  const id = fakerRU.number.int(5000);
  const phoneNumber = fakerRU.phone.number("89#########");
  const gender = sex === "male" ? "Мужской" : "Женский";
  const birthDate = fakerRU.date.birthdate();
  const metro = fakerRU.helpers.arrayElement([
    "Василеостровская",
    "Ладожская",
    "Московская",
  ]);
  const paymentСard = fakerRU.finance.creditCardNumber();
  const bank = fakerRU.helpers.arrayElement(["ВТБ", "Сбер", "Альфа"]);

  const citizenship = fakerRU.helpers.arrayElement([
    "РФ",
    "Азербайджаня",
    "Казахстан",
  ]);
  const validTill = fakerRU.date.between({
    from: new Date("01.01.2020"),
    to: new Date("01.01.2025"),
  });
  const birthplace = fakerRU.helpers.arrayElement([
    "РФ",
    "Азербайджаня",
    "Казахстан",
  ]);
  const patent = fakerRU.helpers.arrayElement([
    "Регистрация",
    "РВП",
    "ВНЖ",
    "Патент",
    "",
  ]);
  const patentValidDate = fakerRU.date.between({
    from: new Date("01.01.2020"),
    to: new Date("01.01.2025"),
  });
  return {
    sex,
    fullName,
    gender,
    bank,
    metro,
    citizenship,
    validTill,
    birthplace,
    id,
    phoneNumber,
    birthDate,
    paymentСard,
    patent,
    patentValidDate,
  };
}
export const getEmployess = (count: number, sample: Employee) => {
  const employess: Employee[] = [];

  for (let i = 0; i < count; i++) {
    const employeeInfo = createEmployeeNameAndSex();
    employess.push({
      ...sample,
      fullName: employeeInfo.fullName,
      id: employeeInfo.id,
      phoneNumber: employeeInfo.phoneNumber,
      gender: employeeInfo.gender,
      birthDate: employeeInfo.birthDate,
      metro: employeeInfo.metro,
      bank: employeeInfo.bank,
      paymentСard: employeeInfo.paymentСard,
      citizenship: employeeInfo.citizenship,
      validTill: employeeInfo.validTill,
      birthplace: employeeInfo.birthplace,
      patent: employeeInfo.patent,
      patentValidDate: employeeInfo.patentValidDate,
    });
  }
  return employess;
};
