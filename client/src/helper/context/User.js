/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();
const UserProvider = UserContext.Provider;

const testAddress = {
  cep: "01000100",
  street: "Rua Atualizada",
  number: "100",
  complement: "APTO 1",
  city: "Campinas",
  state: "Sao Paulo",
};

const testUserPets = [
  {
    id: 1,
    name: "pet name",
    price: 0.0,
    birthDay: "2023-03-11",
    gender: "female",
    photo: null,
    owner: {
      id: 1,
      username: "user",
      email: "email@email.com",
      photo: null,
      address: {
        id: 1,
        cep: "01000100",
        street: "Rua Atualizada",
        number: "100",
        complement: "APTO 1",
        city: "Campinas",
        state: "Sao Paulo",
        createdAt: "2023-03-12T13:34:01.478793",
        updatedAt: "2023-03-12T13:34:01.486284",
      },
      createdAt: "2023-03-12T12:05:35.599333",
      updatedAt: "2023-03-12T13:34:01.486284",
    },
    forSale: false,
  },
  {
    id: 2,
    name: "pet name",
    price: 0.0,
    birthDay: "2023-03-11",
    gender: "female",
    photo: null,
    owner: {
      id: 1,
      username: "user",
      email: "email@email.com",
      photo: null,
      address: {
        id: 1,
        cep: "01000100",
        street: "Rua Atualizada",
        number: "100",
        complement: "APTO 1",
        city: "Campinas",
        state: "Sao Paulo",
        createdAt: "2023-03-12T13:34:01.478793",
        updatedAt: "2023-03-12T13:34:01.486284",
      },
      createdAt: "2023-03-12T12:05:35.599333",
      updatedAt: "2023-03-12T13:34:01.486284",
    },
    forSale: false,
  },
];

const testPet = {
  name: "pet name",
  price: 0,
  birthDay: "2023-03-11T09:45:35.195315081",
  isForSale: false,
  gender: "female",
  owner: {
    id: 1,
  },
};

const addressTest = {
  id: 1,
  cep: "01000100",
  street: "Rua Atualizada",
  number: "100",
  complement: "APTO 1",
  city: "Campinas",
  state: "Sao Paulo",
  createdAt: "2023-03-12T13:34:01.478793356",
  updatedAt: "2023-03-12T13:34:01.486284276",
};

const testUser = {
  id: 1,
  username: "user",
  email: "email@email.com",
  photo: null,
  createdAt: "2023-03-12T12:05:35.599333",
  updatedAt: null,
  address: testAddress,
  pets: testUserPets,
};

const ContextUser = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(testUser);
  const [address, setAddress] = useState(null);
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
        address,
        setAddress,
      }}
    >
      {children}
    </UserProvider>
  );
};

export { UserContext, ContextUser };
