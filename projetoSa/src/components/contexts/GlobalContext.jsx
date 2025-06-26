
import { createContext, useState } from "react";

 
export const GlobalContext = createContext(null)
  // export {GlobalContext}
export const GlobalContextProvider = ({ children }) => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco]= useState("");

  return (
    <GlobalContext.Provider value={{ nome,
     setNome, 
     endereco, 
     setEndereco 

      }}>
      {children}
    </GlobalContext.Provider>
  );
};
