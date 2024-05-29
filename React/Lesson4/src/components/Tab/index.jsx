import { useState } from "react";
import styles from "./index.module.css";

const Tab = ({ options: tabs, children: tabContents }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <div className={styles.tab}>
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={`${styles.tabItem} ${
              activeTabIndex === index && styles.activeTab
            }`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div>{tabContents[activeTabIndex]}</div>
    </>
  );
};

export default Tab;
