import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
// constantes
import { FORM_BORDER_COLOR } from "../../../helper/constants/colors";
import { SPACING_MEDIUM } from "../../../helper/constants/dimensions";
// componentes
import PSText from "../elements/PSText";
import EditUserForm from "./EditUserForm";

const EditUserModal = ({ isOpen, onClose, data, setData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius={0}
        shadow="sm"
        border="1px solid"
        borderColor={FORM_BORDER_COLOR}
      >
        <ModalHeader>
          <PSText text>Formulário</PSText>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack gap={SPACING_MEDIUM} bg="white" p={SPACING_MEDIUM}>
            <PSText text>Editar suas informações pessoais</PSText>
            {/*  */}
            <EditUserForm data={data} setData={setData} onClose={onClose} />
          </Stack>
        </ModalBody>

        <ModalFooter>Footer</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditUserModal;
