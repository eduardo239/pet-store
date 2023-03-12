import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  LABEL_ADDRESS,
  LABEL_ADD_PETS,
  LABEL_PETS,
  LABEL_USER,
  LABEL_USER_PETS,
} from "../../helper/constants";
import {
  SPACING_MEDIUM,
  SPACING_XSMALL,
} from "../../helper/constants/dimensions";
import PSButton from "../form/elements/PSButton";

const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <Flex
      flexWrap="wrap"
      rowGap={SPACING_XSMALL}
      justifyContent="space-between"
    >
      <PSButton onClick={() => navigate("/home")}>Início</PSButton>
      <PSButton onClick={() => navigate("/")}>Pets</PSButton>
      <PSButton onClick={() => navigate("/sign-up")}>Registrar</PSButton>
      <PSButton onClick={() => navigate("/sign-in")}>Entrar</PSButton>
      <PSButton onClick={() => navigate(`/${LABEL_USER}?tab=${LABEL_USER}`)}>
        Perfil
      </PSButton>
      <PSButton onClick={() => navigate(`/${LABEL_USER}?tab=${LABEL_ADDRESS}`)}>
        Endereço
      </PSButton>
      <PSButton
        onClick={() => navigate(`/${LABEL_USER_PETS}?tab=${LABEL_PETS}`)}
      >
        Meus Pets
      </PSButton>
      <PSButton
        onClick={() => navigate(`/${LABEL_USER_PETS}?tab=${LABEL_ADD_PETS}`)}
      >
        Adicionar Pet
      </PSButton>
    </Flex>
  );
};

export default MainMenu;
