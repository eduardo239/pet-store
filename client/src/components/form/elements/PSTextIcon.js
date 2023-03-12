import { Flex } from "@chakra-ui/react";
import { COLOR_WHITE } from "../../../helper/constants/colors";
import {
  SPACING_SMALL,
  SPACING_XSMALL,
} from "../../../helper/constants/dimensions";
import PSText from "./PSText";

const PSTextIcon = ({ icon = null, value }) => {
  return (
    <Flex
      bg="#eee"
      py={SPACING_SMALL}
      align="center"
      gap={SPACING_XSMALL}
      borderBottom="1px solid"
      borderColor={COLOR_WHITE}
    >
      {icon}
      <PSText small>{value}</PSText>
    </Flex>
  );
};

export default PSTextIcon;
