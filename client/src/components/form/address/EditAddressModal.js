import { useContext } from "react";
// chakra
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
import EditAddressForm from "./EditAddressForm";
// contexto
import { UserContext } from "../../../helper/context/User";
import PSTextIcon from "../elements/PSTextIcon";
import { IoDocumentAttachOutline } from "react-icons/io5";

const EditAddressModal = ({ isOpen, onClose }) => {
  const { address, setAddress } = useContext(UserContext);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius={0}
        shadow="sm"
        border="1px solid"
        borderColor={FORM_BORDER_COLOR}
      >
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack gap={SPACING_MEDIUM} bg="white" p={SPACING_MEDIUM}>
            <PSTextIcon
              icon={<IoDocumentAttachOutline />}
              value="Editar o endereço"
            />

            {/*  */}
            <EditAddressForm
              data={address}
              setData={setAddress}
              onClose={onClose}
            />
          </Stack>
        </ModalBody>

        <ModalFooter>Footer</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditAddressModal;
