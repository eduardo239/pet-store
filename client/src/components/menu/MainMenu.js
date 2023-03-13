import { useNavigate } from "react-router-dom";
// chakra
import { Flex, Menu, MenuButton } from "@chakra-ui/react";
// constantes
import {
  SPACING_MEDIUM,
  SPACING_SMALL,
  SPACING_XXSMALL,
  FORM_BUTTON_MIN_WIDTH,
  FORM_BORDER_RADIUS,
} from "../../helper/constants/dimensions";
import { COLOR_BUTTON, COLOR_WHITE } from "../../helper/constants/colors";
// componentes
import UserMenu from "./UserMenu";

const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        gap={1}
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        my={SPACING_SMALL}
      >
        <Menu>
          <MenuButton
            h="40px"
            fontWeight="bold"
            variant="ghost"
            py={SPACING_XXSMALL}
            px={SPACING_MEDIUM}
            // bg={COLOR_BUTTON}
            // color={COLOR_WHITE}
            aria-label="Menu"
            onClick={() => navigate("/")}
            minW={FORM_BUTTON_MIN_WIDTH}
            borderRadius={FORM_BORDER_RADIUS}
          >
            Início
          </MenuButton>
        </Menu>

        <UserMenu />
      </Flex>
    </>
  );
};

export default MainMenu;
