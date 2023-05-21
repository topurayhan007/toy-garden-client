import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ToyCategorySection from "../ToyCategorySection/ToyCategorySection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="text-center">
      <Helmet>
        <title>Toy Garden | Home</title>
      </Helmet>
      <Banner></Banner> 
      <Gallery></Gallery>
      <ToyCategorySection></ToyCategorySection>
    </div>
  );
};

export default Home;
