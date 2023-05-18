import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ToyCategorySection from "../ToyCategorySection/ToyCategorySection";

const Home = () => {
  return (
    <div className="text-center">
      <Banner></Banner>
      <Gallery></Gallery>
      <ToyCategorySection></ToyCategorySection>
    </div>
  );
};

export default Home;
