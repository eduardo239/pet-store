import { Flex, useDisclosure } from "@chakra-ui/react";
import PSButton from "../elements/PSButton";
import PSList from "../../layout/PSList";
import EditAddressModal from "./EditAddressModal";

const EditAddress = ({ data, setData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenAddressModal = (payload) => {
    setData(payload);
    onOpen();
  };

  return (
    <>
      <EditAddressModal
        data={data}
        setData={setData}
        isOpen={isOpen}
        onClose={onClose}
      />

      <PSList items={data} />
      <Flex justifyContent="flex-end" gap={1}>
        <PSButton onClick={() => handleOpenAddressModal(data)}>
          Editar endereço
        </PSButton>
      </Flex>
    </>
  );
};

export default EditAddress;
