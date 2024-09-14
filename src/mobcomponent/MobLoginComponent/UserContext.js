// UserContext.js
import React, { createContext, useContext, useState } from "react";
import MobAccountRegisterComponent from "./MobAccountRegisterComponent";

const UserContext = createContext();

export const UserProvider = () => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <MobAccountRegisterComponent />
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
