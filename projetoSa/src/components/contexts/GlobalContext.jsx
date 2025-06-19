import {  createContext, useState } from "react";

 const GlobalContext = createContext();
export const GlobalContextProvider = ({ Children }) => {
  const [nome, setNome] = useState
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        nome,
        setNome,
        email,
        setEmail,
        senha,
        setSenha

      }}>
        {Children}
    </GlobalContext.Provider>
  );
};
