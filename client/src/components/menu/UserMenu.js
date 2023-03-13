import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// chakra
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
// componentes
import { COLOR_BUTTON, COLOR_WHITE } from "../../helper/constants/colors";
import {
  LABEL_USER,
  LABEL_ADDRESS,
  LABEL_USER_PETS,
  LABEL_PETS,
  LABEL_ADD_PETS,
} from "../../helper/constants";
import {
  FORM_BORDER_RADIUS,
  FORM_BUTTON_MIN_WIDTH,
  SPACING_MEDIUM,
  SPACING_XXSMALL,
} from "../../helper/constants/dimensions";
//
import { UserContext } from "../../helper/context/User";

const UserMenu = () => {
  const { logout } = useContext(UserContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        h="40px"
        fontWeight="bold"
        variant="ghost"
        py={SPACING_XXSMALL}
        px={SPACING_MEDIUM}
        // bg={COLOR_BUTTON}
        // color={COLOR_WHITE}
        aria-label="Menu"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        minW={FORM_BUTTON_MIN_WIDTH}
        borderRadius={FORM_BORDER_RADIUS}
      >
        Menu
      </MenuButton>

      <MenuList
        mt="-2"
        onClick={onOpen}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <MenuItem onClick={() => navigate("/")}>Pets</MenuItem>
        <MenuItem onClick={() => navigate("/sign-up")}>Registrar</MenuItem>
        <MenuItem onClick={() => navigate("/sign-in")}>Entrar</MenuItem>
        <MenuDivider />
        <MenuItem onClick={() => navigate(`/${LABEL_USER}?tab=${LABEL_USER}`)}>
          Perfil
        </MenuItem>
        <MenuItem
          onClick={() => navigate(`/${LABEL_USER}?tab=${LABEL_ADDRESS}`)}
        >
          Editar Endereço
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => navigate(`/${LABEL_USER_PETS}?tab=${LABEL_PETS}`)}
        >
          Meus Pets
        </MenuItem>
        <MenuItem
          onClick={() => navigate(`/${LABEL_USER_PETS}?tab=${LABEL_ADD_PETS}`)}
        >
          Adicionar Pets
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={logout}>Sair</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
