import { Box, Stat, StatLabel } from "@chakra-ui/react";
import { COLOR_WHITE } from "../../helper/constants/colors";
import { SPACING_SMALL } from "../../helper/constants/dimensions";
import PSText from "../form/elements/PSText";

const PSList = ({ items = {} }) => {
  let objectItems = Object.entries(items);

  return (
    <Box p={SPACING_SMALL} bg={COLOR_WHITE}>
      {objectItems &&
        objectItems.map((item, index) => (
          <Stat mb={SPACING_SMALL} key={index}>
            <StatLabel fontSize="xs">{item[0]}</StatLabel>
            <PSText text>{item[1]}</PSText>
          </Stat>
        ))}
    </Box>
  );
};

export default PSList;
