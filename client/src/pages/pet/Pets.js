import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import PetCard from "../../components/cards/PetCard";
import { SPACING_SMALL } from "../../helper/constants/dimensions";

const Pets = () => {
  const [pets, setPets] = useState([
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
  ]);

  const forEachItems = () => {
    return pets.map((pet, idx) => <PetCard key={pet.id} pet={pet} />);
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center" gap={SPACING_SMALL}>
      {pets && pets.length > 0 ? forEachItems() : <div>não tem</div>}
    </Flex>
  );
};

export default Pets;
