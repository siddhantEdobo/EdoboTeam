import React, { useContext, useEffect } from "react";
import HeaderComponent from "../../component/HeaderComponent";
import { Outlet, useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";
import FooterComponent from "../../component/FooterComponent";
import ModalComponent from "../../component/LoginComponent/ModalComponent";
import LoginComponent from "../../component/LoginComponent";
import GlobalContext from "../../context/GlobalContext";
import MobHomeComponent from "../../mobcomponent/MobHomeComponent";
import MobHeaderComponent from "../../mobcomponent/MobHeaderComponent";
import MobBottomNavComponent from "../../mobcomponent/MobBottomNavComponent";

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // navigate(ROUTES_NAVIGATION.PRODUCT_DETAILS);
  }, []);

  return (
    <>
      <div className="d-lg-flex d-none justify-content-center">
        <HeaderComponent />
        <div className="header-box-outlet edobo-white">
          <Outlet />
          <FooterComponent />
        </div>
      </div>
      <div className="d-lg-none d-block">
        {/* <MobHeaderComponent /> */}
        <div className=" edobo-white" >
          <Outlet />
        </div>
        {/* <MobBottomNavComponent /> */}
      </div>
    </>
  );
};

export default MainLayout;
