import { useParams } from "react-router-dom";
import { useState } from "react";
// chakra
import { GridItem, Stack } from "@chakra-ui/react";
// componentes
import PSGrid5050 from "../../components/layout/PSGrid5050";
import PSTextIcon from "../../components/form/elements/PSTextIcon";
import EditAddress from "../../components/form/address/EditAddress";
import PSSelect from "../../components/form/elements/PSSelect";
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

const PetByIdBuy = () => {
  const testPet = {
    id: 1,
    name: "pet name",
    price: 0.0,
    birthDay: "2023-03-11",
    gender: "female",
    photo: null,
    owner: {
      id: 1,
      username: "user",
      email: "email@email.com",
      photo: null,
      address: null,
      createdAt: "2023-03-12T12:05:35.599333",
      updatedAt: null,
    },
    comments: [
      {
        id: 1,
        content: "Null comentário",
        likes: 34,
      },
    ],
    createdAt: "2023-03-12T12:05:42.001851",
    updatedAt: null,
    forSale: false,
  };

  const addressTest = {
    id: 1,
    cep: "01000100",
    street: "Rua Atualizada",
    number: "100",
    complement: "APTO 1",
    city: "Campinas",
    state: "Sao Paulo",
    createdAt: "2023-03-12T13:34:01.478793356",
    updatedAt: "2023-03-12T13:34:01.486284276",
  };

  const { id } = useParams();

  const [pet, setPet] = useState(testPet);
  const [order, setOrder] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [address, setAddress] = useState(addressTest);

  return (
    <PSGrid5050>
      <GridItem w="100%" p={SPACING_MEDIUM} bg={COLOR_WHITE}>
        <PSTextIcon
          icon={<IoDocumentAttachOutline />}
          value="Método de Pagamento"
        />
        <PSSelect items={PAYMENT_TYPES}></PSSelect>
      </GridItem>
      <GridItem w="100%" p={SPACING_MEDIUM} bg={COLOR_WHITE_ALTERNATE}>
        <Stack gap={SPACING_SMALL}>
          {/* <PetByIdTitle pet={pet} /> */}
          {/*  */}
          {pet && (
            <>
              <PSTextIcon icon={<IoCityOut />} value="Endreço de entrega" />
              <EditAddress data={address} setData={setAddress} />
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
