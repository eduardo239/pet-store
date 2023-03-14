import { Grid } from "@chakra-ui/react";

const PSGridAutoFr = ({ templateColumns, children, gap = 0 }) => {
  return (
    <Grid w="100%" p={0} gap={gap} templateColumns={templateColumns}>
      {children}
    </Grid>
  );
};

export default PSGridAutoFr;
