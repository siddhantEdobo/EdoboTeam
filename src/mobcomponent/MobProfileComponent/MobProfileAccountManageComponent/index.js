import React from "react";
import MobProfileMyAccountComponent from "../MobProfileMyAccountComponent";
import MobHeaderComponent from "../../MobHeaderNavigation";
import ROUTES_NAVIGATION from "../../../routes/routes";
import { useNavigate } from "react-router";

const MobProfileAccountManageComponent = () => {
  return (
    <div>
      <MobHeaderComponent text={'My Accoount'}
        // isBack={true}
        // headerText={"My Account"}
        // isCartShow={false}
        // isEdoboLogo={true}
      />
      <MobProfileMyAccountComponent />
    </div>
  );
};

export default MobProfileAccountManageComponent;
