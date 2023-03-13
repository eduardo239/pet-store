//
import PSTextIcon from "../form/elements/PSTextIcon";
import UserAvatar from "./UserAvatar";
//
import {
  IoAlertCircleOutline,
  IoAtCircleOutline,
  IoCheckmark,
  IoChevronDownOutline,
  IoDesktopOutline,
  IoInformationOutline,
} from "react-icons/io5";
import PSText from "../form/elements/PSText";
import { Box, Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import {
  SPACING_SMALL,
  SPACING_XSMALL,
} from "../../helper/constants/dimensions";

const UserInformation = () => {
  return (
    <>
      <PSTextIcon icon={<IoInformationOutline />} value="Informações Extras" />
      {/*  */}
      <UserAvatar avatar={null} />
      {/*  */}
      <PSTextIcon icon={<IoAlertCircleOutline />} value="Username" />
      {/*  */}
      <Box p={SPACING_SMALL}>
        <PSText>Username</PSText>
      </Box>
      <PSTextIcon icon={<IoChevronDownOutline />} value="Detalhes da Conta" />

      <List p={SPACING_SMALL}>
        <ListItem fontSize="xs" mb={SPACING_XSMALL}>
          <ListIcon as={IoCheckmark} />
          Email: email@email.com
        </ListItem>
        <ListItem fontSize="xs" mb={SPACING_XSMALL}>
          <ListIcon as={IoCheckmark} />
          Total de Pedidos: 123
        </ListItem>
        <ListItem fontSize="xs" mb={SPACING_XSMALL}>
          <ListIcon as={IoCheckmark} />
          Total de Pets: 22
        </ListItem>
        <ListItem fontSize="xs" mb={SPACING_XSMALL}>
          <ListIcon as={IoCheckmark} />
          ID do Usuário: # 1
        </ListItem>
        <ListItem fontSize="xs" mb={SPACING_XSMALL}>
          <ListIcon as={IoCheckmark} />
          Usuário ativo: Yes
        </ListItem>
      </List>
    </>
  );
};

export default UserInformation;
