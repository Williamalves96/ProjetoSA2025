
import { createContext, useState } from "react";

export  const GlobalContext = createContext()
export const GlobalContextProvider = ({ Children }) => {
  const [nome, setNome] = useState("");
  

  return (
    <GlobalContext.Provider
      value={{ nome, setNome  }}
    >
      {Children}
    </GlobalContext.Provider>
  );
};
