import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import LoaderProvider from "./context/LoaderProvider";
import { Provider } from "react-redux";
import { store } from "./redux";
import RouteComponent from "./routes";
import { useEffect, useState } from "react";
import MobLocationComponent from "./mobcomponent/MobLocationComponent";
import { LoadScript } from "@react-google-maps/api";
// import { UserProvider } from "./mobcomponent/MobLoginComponent/userContext";

// import GoogleMapsProvider from "../MobLocationComponent/GoogleMapsProvider";
const libraries = ["places"];
function App() {
  return (
    // {/* // <GoogleMapsProvider> */}
    <BrowserRouter>
      <GlobalContextProvider>
        <Provider store={store}>
          <LoaderProvider>
            <RouteComponent />
          </LoaderProvider>
        </Provider>
      </GlobalContextProvider>
    </BrowserRouter>
    // {/* // </GoogleMapsProvider> */}
  );
}

export default App;
