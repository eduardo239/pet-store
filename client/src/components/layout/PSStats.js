import { Box, Flex } from "@chakra-ui/react";
import {
  COLOR_WHITE,
  COLOR_WHITE_ALTERNATE,
  FORM_BORDER_COLOR,
} from "../../helper/constants/colors";
import {
  FORM_BORDER_RADIUS,
  SPACING_SMALL,
  SPACING_XSMALL,
  STATS_MIN_WIDTH,
} from "../../helper/constants/dimensions";
import PSText from "../form/elements/PSText";

const PSStats = ({
  title = "Título",
  value = "Texto",
  icon = null,
  description = null,
}) => {
  return (
    <Box
      bg={COLOR_WHITE}
      borderWidth={1}
      p={SPACING_SMALL}
      minW={STATS_MIN_WIDTH}
      borderColor={FORM_BORDER_COLOR}
      borderRadius={FORM_BORDER_RADIUS}
    >
      <PSText small>{title}</PSText>
      {icon ? (
        <Flex justifyContent="center" py={SPACING_XSMALL}>
          {icon}
        </Flex>
      ) : (
        <Flex justifyContent="center" py={SPACING_XSMALL}>
          <PSText subtitle>{value}</PSText>
        </Flex>
      )}
      {description && <PSText small>{description}</PSText>}
    </Box>
  );
};

export default PSStats;
