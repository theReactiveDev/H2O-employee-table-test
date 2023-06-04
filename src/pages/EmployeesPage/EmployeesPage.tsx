import EmployessTabs from "../../components/EmployeesTabs/EmployessTabs";
import s from "./employeesPage.module.scss";

export const EmployeesPage = () => {
  return (
    <div className={s.wrapper}>
      <EmployessTabs />
    </div>
  );
};
