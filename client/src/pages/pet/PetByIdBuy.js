import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
// chakra
import { Box, Flex, GridItem, Stack } from "@chakra-ui/react";
// componentes
import PSGrid5050 from "../../components/layout/PSGrid5050";
import PSSelect from "../../components/form/elements/PSSelect";
import PSTextIcon from "../../components/form/elements/PSTextIcon";
import EditAddressWrapper from "../../components/form/address/EditAddressWrapper";
// constantes
import { PAYMENT_TYPES } from "../../helper/constants";
import {
  SPACING_MEDIUM,
  SPACING_SMALL,
} from "../../helper/constants/dimensions";
import {
  COLOR_WHITE,
  COLOR_WHITE_ALTERNATE,
} from "../../helper/constants/colors";
// icons
import {
  IoBusinessOutline as IoCityOut,
  IoDocumentAttachOutline,
  IoWalletOutline,
} from "react-icons/io5";
// contexto
import { PetContext } from "../../helper/context/Pets";
import { UserContext } from "../../helper/context/User";
import PSStats from "../../components/layout/PSStats";

const PetByIdBuy = () => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();

  const { pet } = useContext(PetContext);
  const { user } = useContext(UserContext);

  // eslint-disable-next-line no-unused-vars
  const [order, setOrder] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [paymentMethod, setPaymentMethod] = useState({});

  return (
    <PSGrid5050>
      <GridItem p={SPACING_MEDIUM} bg={COLOR_WHITE}>
        <PSTextIcon
          icon={<IoDocumentAttachOutline />}
          value="Método de Pagamento"
        />
        <Box p={SPACING_SMALL}>
          <PSSelect items={PAYMENT_TYPES} setValue={setPaymentMethod} />
        </Box>

        <PSTextIcon
          icon={<IoDocumentAttachOutline />}
          value="Método de Escolhido"
        />

        {/* <Flex flexWrap="wrap" p={SPACING_SMALL}>
          <PSStats title="Método Escolhido" value={paymentMethod} />
        </Flex> */}
      </GridItem>
      <GridItem p={SPACING_MEDIUM} bg={COLOR_WHITE_ALTERNATE}>
        <Stack gap={SPACING_SMALL}>
          {/* <PetByIdTitle pet={pet} /> */}
          {/*  */}
          {pet && (
            <>
              <PSTextIcon icon={<IoCityOut />} value="Endreço de entrega" />
              <EditAddressWrapper data={user.address} />
              {/*  */}
              <PSTextIcon icon={<IoWalletOutline />} value="Resumo da Compra" />
            </>
          )}
        </Stack>
      </GridItem>
    </PSGrid5050>
  );
};

export default PetByIdBuy;
