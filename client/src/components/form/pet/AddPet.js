import { useDisclosure } from "@chakra-ui/react";
// componentes

// constantes

import PSButton from "../elements/PSButton";
import AddPetModal from "./AddPetModal";

const AddPet = ({ data, setData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenAddPetModel = (payload) => {
    setData(payload);
    onOpen();
  };

  return (
    <>
      <AddPetModal
        data={data}
        setData={setData}
        isOpen={isOpen}
        onClose={onClose}
      />

      <PSButton onClick={() => handleOpenAddPetModel(data)}>
        Adicionar um Pet
      </PSButton>
    </>
  );
};

export default AddPet;
