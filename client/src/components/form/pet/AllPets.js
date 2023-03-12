import { Flex } from "@chakra-ui/react";
import { SPACING_SMALL } from "../../../helper/constants/dimensions";
import PetCard from "../../cards/PetCard";

const AllPets = ({ pets }) => {
  const forEachItems = () => {
    return pets.map((pet, idx) => <PetCard key={pet.id} pet={pet} />);
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center" gap={SPACING_SMALL}>
      {pets && pets.length > 0 ? forEachItems() : <div>não tem</div>}
    </Flex>
  );
};

export default AllPets;
