// chakra
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
// constantes
import {
  R_GRID_50_50_TO_1FR,
  R_GRID_CENTER_TO_START,
} from "../../helper/constants/responsive";

const PSGrid5050 = ({ children, gap = 0 }) => {
  return (
    <Grid w="100%" p={0} gap={gap} templateColumns={R_GRID_50_50_TO_1FR}>
      {children}
    </Grid>
  );
};

export default PSGrid5050;
