import EmployessTabs from "../../components/EmployeesTabs/EmployessTabs";
import UserProfile from "../../components/UserProfile/UserProfile";
import avatar from "../../images/UserAvatar.png";
import s from "./employeesPage.module.scss";

export const EmployeesPage = () => {
  return (
    <div className={s.wrapper}>
      <EmployessTabs />
    </div>
  );
};
