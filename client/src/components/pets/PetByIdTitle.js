import { Link } from "react-router-dom";
// chakra
import { Flex, IconButton } from "@chakra-ui/react";
// componentes
import PSText from "../form/elements/PSText";
// icons
import { IoDocumentTextOutline, IoCloseOutline } from "react-icons/io5";

const PetByIdTitle = ({ pet, onOpenDelete, onOpenUpdate }) => {
  return (
    <>
      {pet ? (
        <PSText small>
          ID pet # {pet.id} | ID dono #
          <Link to={`/user/${pet.ownerId}`}>
            {pet.ownerId} Ver mais sobre o vendedor
          </Link>
        </PSText>
      ) : (
        <PSText subtitle>Pet não encontrado</PSText>
      )}
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <PSText subtitle>{pet?.name}</PSText>
        {pet?.id && (
          <Flex>
            <IconButton
              variant="ghost"
              icon={<IoDocumentTextOutline />}
              onClick={onOpenUpdate}
            />
            <IconButton
              variant="ghost"
              icon={<IoCloseOutline />}
              onClick={onOpenDelete}
            />
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default PetByIdTitle;
