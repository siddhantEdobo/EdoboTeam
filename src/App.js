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
      <LoadScript
        googleMapsApiKey="AIzaSyBYaUmkSyrXGhQhl2GmRjpQ53a99fI7d5E"
        libraries={libraries}
        // onLoad={handleLoade}
      >
        <GlobalContextProvider>
          <Provider store={store}>
            <LoaderProvider>
              <RouteComponent />
            </LoaderProvider>
          </Provider>
        </GlobalContextProvider>
      </LoadScript>
    </BrowserRouter>
    // {/* // </GoogleMapsProvider> */}
  );
}

export default App;
