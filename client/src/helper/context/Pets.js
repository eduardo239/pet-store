/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PetContext = React.createContext();
const PetProvider = PetContext.Provider;

const ContextPet = ({ children }) => {
  const navigate = useNavigate();

  const [allPets, setAllPets] = useState([]);

  return (
    <PetProvider
      value={{
        allPets,
        setAllPets,
      }}
    >
      {children}
    </PetProvider>
  );
};

export { PetContext, ContextPet };
