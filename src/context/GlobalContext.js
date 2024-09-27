import { createContext, useState } from "react";
import { confirm } from "../common/CustomConfirmModel";
const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const [addMasterModel, setAddMasterModel] = useState(false);
  const [isUserAuth, setIsUserAuth] = useState(
    localStorage.getItem("isRegisteredUser") === "true" || false
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const displayModal = async (props) => {
    console.log("props", props);
    let result = await confirm({ ...props });
    return result;
  };

  return (
    <GlobalContext.Provider
      value={{
        addMasterModel,
        setAddMasterModel,
        displayModal,
        isUserAuth,
        setIsUserAuth,
        isModalOpen,
        setIsModalOpen,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
