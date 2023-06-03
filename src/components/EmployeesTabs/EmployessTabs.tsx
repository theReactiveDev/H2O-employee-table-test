import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import cn from "classnames";

import { TabsIcon } from "../../icons";
import s from "./employessTabs.module.scss";

const EmployessTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div className={s.wrapper}>
      <Tabs
        selectedIndex={activeTab}
        onSelect={(index) => setActiveTab(index)}
        selectedTabClassName={s.selectedTab}
        selectedTabPanelClassName={s.selectedTabContent}
        className={s.tabsContainer}
      >
        <div className={s.tabsWrapper}>
          <div className={s.buttonsContainer}>
            <button className={s.tabButton}>
              <TabsIcon />
            </button>
            <button className={cn(s.tabButton, s.next)}>
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
        <div className={s.tabsContent}>
          <TabPanel>
            <h1>База анкет сотрудников</h1>
          </TabPanel>
          <TabPanel>
            <h1>Общая база сотрудников</h1>
          </TabPanel>
          <TabPanel>
            <h1>База сотрудников</h1>
          </TabPanel>
          <TabPanel>
            <h1>Календарь сотрудников</h1>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default EmployessTabs;
