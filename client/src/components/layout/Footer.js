import { Grid, GridItem, Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  COLOR_BLACK_ALTERNATE,
  COLOR_PRIMARY_LIGHTER,
} from "../../helper/constants/colors";
import {
  FORM_BORDER_RADIUS,
  SPACING_MEDIUM,
} from "../../helper/constants/dimensions";
import { R_GRID_5050_TO_1FR } from "../../helper/constants/responsive";
import PSText from "../form/elements/PSText";
const Footer = () => {
  return (
    <Grid
      p={SPACING_MEDIUM}
      gap={SPACING_MEDIUM}
      templateColumns={R_GRID_5050_TO_1FR}
      bg={COLOR_PRIMARY_LIGHTER}
    >
      <GridItem>
        <VStack align="flex-start" gap={SPACING_MEDIUM} p={SPACING_MEDIUM}>
          <PSText small>Pet-Store</PSText>
          <VStack align="flex-start">
            <PSText color="purple" fontWeight="bold" mb={SPACING_MEDIUM}>
              Endereço
            </PSText>
            <PSText>Rua Eldorado do Sul</PSText>
            <PSText>Número 4000</PSText>
            <PSText>Perto do Hotel</PSText>
            <PSText>Venha o mais rápido</PSText>
          </VStack>

          <VStack align="flex-start">
            <Link to="/">Home</Link>
            <Link to="/pets">Pets</Link>
            <Link to="/sign-in">Entrar</Link>
          </VStack>
        </VStack>
      </GridItem>

      <GridItem>
        <VStack>
          <Image
            src={`https://picsum.photos/seed/picsum/300/300?grayscale`}
            shadow="lg"
            maxH="400px"
            overflow="hidden"
            border="16px solid"
            objectFit="cover"
            borderColor="gray.200"
            borderRadius={FORM_BORDER_RADIUS}
          />
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Footer;
