/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PetContext = React.createContext();
const PetProvider = PetContext.Provider;

const testPetComments = {
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
    address: null,
    createdAt: "2023-03-12T12:05:35.599333",
    updatedAt: null,
  },
  comments: [
    {
      id: 1,
      content: "Null comentário",
      likes: 34,
    },
    {
      id: 2,
      content: "Null 2 comentário",
      likes: 124,
    },
  ],
  createdAt: "2023-03-12T12:05:42.001851",
  updatedAt: null,
  forSale: true,
};

const testPets = [
  {
    id: 1,
    name: "marjunco",
    price: 0,
    birthDay: "2023-03-11T09:45:35.195315081",
    isForSale: false,
    gender: "female",
    owner: {
      id: 1,
    },
  },
  {
    id: 2,
    name: "popo",
    price: 0,
    birthDay: "2023-03-11T09:45:35.195315081",
    isForSale: false,
    gender: "female",
    owner: {
      id: 2,
    },
  },
  {
    id: 3,
    name: "popo",
    price: 0,
    birthDay: "2023-03-11T09:45:35.195315081",
    isForSale: false,
    gender: "female",
    owner: {
      id: 2,
    },
  },
  {
    id: 55,
    name: "popo",
    price: 0,
    birthDay: "2023-03-11T09:45:35.195315081",
    isForSale: false,
    gender: "female",
    owner: {
      id: 2,
    },
  },
];

const ContextPet = ({ children }) => {
  const navigate = useNavigate();

  const [pet, setPet] = useState(testPetComments);
  const [pets, setPets] = useState(testPets);

  return (
    <PetProvider
      value={{
        pets,
        setPets,
        pet,
        setPet,
      }}
    >
      {children}
    </PetProvider>
  );
};

export { PetContext, ContextPet };
