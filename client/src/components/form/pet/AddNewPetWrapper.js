import { Flex, useDisclosure } from "@chakra-ui/react";
import { SPACING_SMALL } from "../../../helper/constants/dimensions";
// componentes

// constantes

import PSButton from "../elements/PSButton";
import AddPetModal from "./AddPetModal";

const AddNewPetWrapper = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenAddPetModel = (payload) => {
    onOpen();
  };

  return (
    <>
      <AddPetModal isOpen={isOpen} onClose={onClose} />

      <Flex justifyContent="flex-end" gap={1} p={SPACING_SMALL}>
        <PSButton onClick={() => handleOpenAddPetModel()}>
          Adicionar um Pet
        </PSButton>
      </Flex>
    </>
  );
};

export default AddNewPetWrapper;
