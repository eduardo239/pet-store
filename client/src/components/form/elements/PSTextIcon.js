import { Box, Flex } from "@chakra-ui/react";
import {
  COLOR_BLACK_ALTERNATE,
  COLOR_WHITE,
} from "../../../helper/constants/colors";
import {
  FORM_BORDER_RADIUS,
  SPACING_SMALL,
  SPACING_XSMALL,
} from "../../../helper/constants/dimensions";
import PSText from "./PSText";

const PSTextIcon = ({ icon = null, value }) => {
  return (
    <Flex
      bg={COLOR_BLACK_ALTERNATE}
      borderRadius={FORM_BORDER_RADIUS}
      color={COLOR_WHITE}
      py={SPACING_SMALL}
      borderBottom="1px solid"
      borderColor={COLOR_WHITE}
    >
      <Flex pl={SPACING_SMALL} align="center" gap={SPACING_XSMALL}>
        {icon}
        <PSText small>{value}</PSText>
      </Flex>
    </Flex>
  );
};

export default PSTextIcon;
