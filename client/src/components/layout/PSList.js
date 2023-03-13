import { Box, Stat, StatLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { COLOR_WHITE } from "../../helper/constants/colors";
import { SPACING_SMALL } from "../../helper/constants/dimensions";
import { convertObjectToArray } from "../../helper/functions";
import PSText from "../form/elements/PSText";

const PSList = ({ items = {} }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (items) {
        setData(convertObjectToArray(items));
      }
    }

    return () => {
      mounted = false;
    };
  }, [items]);

  return (
    <Box p={SPACING_SMALL} bg={COLOR_WHITE}>
      {data && data.length > 0 ? (
        data.map((item, idx) => (
          <Stat mb={SPACING_SMALL} key={idx}>
            <StatLabel fontSize="xs">{item[0]}</StatLabel>
            <PSText text>{item[1]}</PSText>
          </Stat>
        ))
      ) : (
        <Stat mb={SPACING_SMALL}>
          <StatLabel fontSize="xs">Título</StatLabel>
          <PSText text>Nenhuma informação encontrada</PSText>
        </Stat>
      )}
    </Box>
  );
};

export default PSList;
