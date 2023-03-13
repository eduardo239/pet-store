import { useContext } from "react";
// chakra
import { Flex } from "@chakra-ui/react";
// componentes
import PetCard from "../../components/cards/PetCard";
// constantes
import { SPACING_SMALL } from "../../helper/constants/dimensions";
// contexto
import { PetContext } from "../../helper/context/Pets";

const Pets = () => {
  const { pets } = useContext(PetContext);
  // eslint-disable-next-line no-unused-vars

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
