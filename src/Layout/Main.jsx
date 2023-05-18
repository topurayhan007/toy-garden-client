import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div className=" bg-white">
      <Header></Header>
      <div className="max-w-screen-xl mx-auto">
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Main;
