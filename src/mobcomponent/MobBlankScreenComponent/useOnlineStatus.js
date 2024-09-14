import { useState, useEffect } from "react";

function useOnlineStatus() {
    
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  return online;
}

export default useOnlineStatus;
