import { Flex, useDisclosure } from "@chakra-ui/react";
import PSButton from "../elements/PSButton";
import EditUserModal from "./EditUserModal";
import PSList from "../../layout/PSList";

const EditUserInfo = ({ data, setData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenUserEditModal = (payload) => {
    setData(payload);
    onOpen();
  };

  return (
    <>
      <EditUserModal
        data={data}
        setData={setData}
        isOpen={isOpen}
        onClose={onClose}
      />

      <PSList items={data} />

      <Flex justifyContent="flex-end" gap={1}>
        <PSButton onClick={() => handleOpenUserEditModal(data)}>
          Editar informações
        </PSButton>
      </Flex>
    </>
  );
};

export default EditUserInfo;
