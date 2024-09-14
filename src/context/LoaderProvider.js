import React, { useState } from "react";
import { useEffect } from "react";
// import Spinner from "react-activity/dist/Spinner";
// import "react-activity/dist/Spinner.css";

const LoaderContext = React.createContext({});

export const useLoader = () => React.useContext(LoaderContext);

const LoaderProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false);

  //this is scroll auto to top of screen
  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [showLoader]);

  return (
    <LoaderContext.Provider
      value={{
        showLoader: showLoader,
        setShowLoader: setShowLoader,
      }}
    >
      {Boolean(showLoader) && (
        <div style={styles.container}>
          {/* <Spinner size={30} color={commonColor.edoboRed} /> */}
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
      {children}
    </LoaderContext.Provider>
  );
};

const styles = {
  container: {
    display: "flex",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    // backgroundColor: "rgba(0,0,0,0.7)",
    width: "100%",
    height: "100%",
    zIndex: 99999,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default LoaderProvider;
