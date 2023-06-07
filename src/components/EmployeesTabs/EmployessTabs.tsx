import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import cn from "classnames";

import {
  EmployeeQuestionnaires,
  EmployessCalendar,
  EmployessDatabase,
  OverallEmployessDatabase,
} from "../../features";

import UserProfile from "../../components/UserProfile/UserProfile";

import avatar from "../../images/UserAvatar.png";

import { TabsIcon } from "../../icons";

import s from "./employessTabs.module.scss";

const EmployessTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabButtonClick = (direction: boolean) => {
    direction
      ? setActiveTab((prev) => (prev != 0 ? prev - 1 : prev))
      : setActiveTab((prev) => (prev != 3 ? prev + 1 : prev));
  };
  return (
    <Tabs
      selectedIndex={activeTab}
      onSelect={(index) => setActiveTab(index)}
      selectedTabClassName={s.selectedTab}
      selectedTabPanelClassName={s.selectedTabContent}
      className={s.tabsContainer}
    >
      <div className={s.pageHeader}>
        <div className={s.tabsWrapper}>
          <div className={s.buttonsContainer}>
            <button
              className={s.tabButton}
              onClick={() => handleTabButtonClick(true)}
            >
              <TabsIcon />
            </button>
            <button
              className={cn(s.tabButton, s.next)}
              onClick={() => handleTabButtonClick(false)}
            >
              <TabsIcon />
            </button>
          </div>
          <div>
            <TabList className={s.tabList}>
              <Tab className={s.tab}>База анкет сотрудников</Tab>
              <Tab className={s.tab}>Общая база сотрудников</Tab>
              <Tab className={s.tab}>База сотрудников</Tab>
              <Tab className={s.tab}>Календарь сотрудников</Tab>
            </TabList>
          </div>
        </div>

        <UserProfile
          image={avatar}
          username="Kristina 🐰"
          position="менеджер продаж"
        />
      </div>
      <div className={s.tabsContent}>
        <TabPanel>
          <EmployeeQuestionnaires />
        </TabPanel>
        <TabPanel>
          <OverallEmployessDatabase />
        </TabPanel>
        <TabPanel>
          <EmployessDatabase />
        </TabPanel>
        <TabPanel>
          <EmployessCalendar />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default EmployessTabs;
