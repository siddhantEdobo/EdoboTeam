import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { UserProvider } from "./src/mobcomponent/MobHomeComponent/MobLoginComponent/UserContext
// import { UserProvider } from "./mobcomponent/MobLoginComponent/UserContext"

import Nointernet from "./mobcomponent/MobBlankScreenComponent/Nointernet";
import useOnlineStatus from "./mobcomponent/MobBlankScreenComponent/useOnlineStatus";

function Root() {
  const online = useOnlineStatus();
  return online ? <App /> : <Nointernet />;
}

ReactDOM.render(
  
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
  

  document.getElementById("root")
);

reportWebVitals();
