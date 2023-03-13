import PSButton from "../elements/PSButton";
import PSList from "../../layout/PSList";
import EditAddressModal from "./EditAddressModal";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { SPACING_SMALL } from "../../../helper/constants/dimensions";

const EditAddressWrapper = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenAddressModal = () => {
    onOpen();
  };

  return (
    <>
      <EditAddressModal isOpen={isOpen} onClose={onClose} />

      {data && <PSList items={data} />}

      <Flex justifyContent="flex-end" gap={1} p={SPACING_SMALL}>
        <PSButton onClick={() => handleOpenAddressModal()}>
          Editar endereço
        </PSButton>
      </Flex>
    </>
  );
};

export default EditAddressWrapper;
