import { useState } from "react";
import { createContext } from "react";

export const TimeContext = createContext();

export const TimeContextProvider = ({ children }) => {
  const [time, setTime] = useState(undefined);

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  );
};
