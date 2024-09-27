import React, { lazy } from "react";
import MinimalLayout from "../layout/MinimalLayout";
import Loadable from "../components/Shared/Loadable";
import ROUTES_NAVIGATION from "./routes";

const AuthLogin = Loadable(lazy(() => import("../pages/LoginScreen")));

const LoginNavigation = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: ROUTES_NAVIGATION.LOGIN,
      element: <AuthLogin />,
    },
  ],
};

export default LoginNavigation;
