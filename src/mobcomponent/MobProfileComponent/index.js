import React, { useEffect, useState } from "react";
import MobHeaderComponent from "../MobHeaderComponent";
import { Outlet, useNavigate, useResolvedPath } from "react-router";
import ROUTES_NAVIGATION from "../../routes/routes";
import MobAddAddressComponent from "../MobAddAddressCompoent";
import MobProfileAccountManageComponent from "./MobProfileAccountManageComponent";
import MobBottomNavComponent from "../MobBottomNavComponent";

const MobProfileComponent = () => {
  const navigate = useNavigate();
  const [selectedList, setSelectedList] = useState("");
  const redirectedPath = useResolvedPath();

  useEffect(() => {
    // navigate(ROUTES_NAVIGATION.USER_ACCOUNT);
  }, [navigate]);

  useEffect(() => {
    if (redirectedPath?.pathname) {
      setSelectedList(redirectedPath?.pathname?.replace("/profile", ""));
    }
  }, [redirectedPath?.pathname]);

  console.log("selectedList", selectedList);

  return (
    <>
      <div className="">
        {selectedList?.length === 0 && (
          <div className="nav  nav-underline justify-content-around mt-2 ">
            <div className="nav-item">
              <div className={`nav-link text-secondary active text-danger`}>
                MY ACCOUNT
              </div>
            </div>
            <div
              className="nav-item"
              onClick={() => {
                navigate(ROUTES_NAVIGATION.USER_ADDRESS);
              }}
            >
              <div
                className={`nav-link text-secondary`}
                onClick={() => {
                  navigate(ROUTES_NAVIGATION.USER_ADDRESS);
                }}
              >
                MANAGE ADDRESS
              </div>
            </div>
          </div>
        )}
        <Outlet />
        {selectedList?.length === 0 && <MobProfileAccountManageComponent />}
      </div>
      {/* <MobBottomNavComponent /> */}
    </>
  );
};

export default MobProfileComponent;
