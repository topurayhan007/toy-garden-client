import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ToyCategorySection.css";
import ToyCategoryCard from "../ToyCategoryCard/ToyCategoryCard";

const ToyCategorySection = () => {
  const subCategories = {
    0: "Marvel",
    1: "DC",
    2: "Star Wars",
    3: "Transformers",
  };

  const [loading, setLoading] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const [toys, setToys] = useState([]);
  // console.log("TabIndex", tabIndex);

  const selectedCategory = subCategories[tabIndex];
  console.log(selectedCategory);

  useEffect(() => {
    fetch("https://toy-garden-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);

  const subCategoryData = toys.filter(
    (toy) => toy.subCategory === selectedCategory
  );

  console.log(subCategoryData);

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
      <div className="max-w-screen-xl mx-auto px-3 justify-center items-center mt-3">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Marvel</Tab>
            <Tab>DC</Tab>
            <Tab>Star Wars</Tab>
            <Tab>Transformers</Tab>
          </TabList>
          {loading === true ? (
            <div className="my-14 flex justify-center mt-20">
              <div
                className="radial-progress animate-spin text-[#ea6802]"
                style={{ "--value": 85 }}
              ></div>
            </div>
          ) : (
            <div className="">
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {subCategoryData.map((toy) => (
                    <ToyCategoryCard key={toy._id} toy={toy}></ToyCategoryCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {subCategoryData.map((toy) => (
                    <ToyCategoryCard key={toy._id} toy={toy}></ToyCategoryCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {subCategoryData.map((toy) => (
                    <ToyCategoryCard key={toy._id} toy={toy}></ToyCategoryCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {subCategoryData.map((toy) => (
                    <ToyCategoryCard key={toy._id} toy={toy}></ToyCategoryCard>
                  ))}
                </div>
              </TabPanel>
            </div>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default ToyCategorySection;
