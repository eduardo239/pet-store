// chakra
import { Grid } from "@chakra-ui/react";
// constantes
import { R_GRID_AUTO_1FR_TO_1FR } from "../../helper/constants/responsive";

const PSGridAutoFr = ({ children, gap = 0 }) => {
  return (
    <Grid w="100%" p={0} gap={gap} templateColumns={R_GRID_AUTO_1FR_TO_1FR}>
      {children}
    </Grid>
  );
};

export default PSGridAutoFr;
