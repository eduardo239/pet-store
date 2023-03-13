// componentes
import { Flex, useDisclosure } from "@chakra-ui/react";
import PSButton from "../elements/PSButton";
import EditUserModal from "./EditUserModal";
import PSList from "../../layout/PSList";
import { SPACING_SMALL } from "../../../helper/constants/dimensions";

const EditUserWrapper = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenUserEditModal = (payload) => {
    onOpen();
  };

  return (
    <>
      <EditUserModal isOpen={isOpen} onClose={onClose} />

      <PSList items={data} />

      <Flex justifyContent="flex-end" gap={1} p={SPACING_SMALL}>
        <PSButton onClick={() => handleOpenUserEditModal()}>
          Editar informações
        </PSButton>
      </Flex>
    </>
  );
};

export default EditUserWrapper;
