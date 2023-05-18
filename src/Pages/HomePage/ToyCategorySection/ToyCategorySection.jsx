import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ToyCategorySection.css";

const ToyCategorySection = () => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log("TabIndex", tabIndex);

  return (
    <div className="">
      <div className="">
        <div
          className="hero lg:h-[320px] h-[200px]"
          style={{
            backgroundImage: `url("./assets/images/sub-banner2.jpg")`,
          }}
        >
          <div className="hero-overlay bg-[#090836] bg-opacity-60 "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <div className="bg-base-300 backdrop-blur-sm bg-white/30 text-white card p-4 md:p-5 lg:p-10 h-50 flex justify-center items-center">
                <div>
                  <h1 className="mb-5 text-xl md:text-3xl font-bold">asdas</h1>
                  <div className="flex justify-center mb-2">
                    <hr className="border-[1.2px] w-16 border-orange-400  rounded" />
                  </div>
                  <p className="mb-5 font-extrabold text-base md:text-xl text-green-500">
                    ~ sada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Marvel</Tab>
            <Tab>DC</Tab>
            <Tab>Star Wars</Tab>
            <Tab>Transformers</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ToyCategorySection;
