import React, { lazy } from "react";
import MainLayout from "../layout/MainLayout";
import Loadable from "../components/Shared/Loadable";
import ROUTES_NAVIGATION from "./routes";

const DashboardDefault = Loadable(
  lazy(() => import("../pages/DashboardScreen"))
);

const MainNavigation = {};

export default MainNavigation;
