/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();
const UserProvider = UserContext.Provider;

const ContextUser = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [orderList, setOrderPetList] = useState([]);

  const logout = () => {
    setUser(null);

    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <UserProvider
      value={{
        user,
        setUser,
        logout,
        orderList,
        setOrderPetList,
      }}
    >
      {children}
    </UserProvider>
  );
};

export { UserContext, ContextUser };
