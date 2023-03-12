import { useNavigate } from "react-router-dom";
// chakra
import { Flex, GridItem, Stack } from "@chakra-ui/react";
import { useState } from "react";
// componentes
import PSGrid5050 from "../../components/layout/PSGrid5050";
import PSGallery from "../../components/images/PSGallery";
// constantes
import {
  SPACING_MEDIUM,
  SPACING_SMALL,
} from "../../helper/constants/dimensions";
import {
  COLOR_WHITE,
  COLOR_WHITE_ALTERNATE,
} from "../../helper/constants/colors";
// componentes
import PetByIdTitle from "../../components/pets/PetByIdTitle";
import PSTextIcon from "../../components/form/elements/PSTextIcon";
import PSPetStats from "../../components/pets/PSPetStats";
import PetBuyOptions from "../../components/pets/PetBuyOptions";
import PSButton from "../../components/form/elements/PSButton";
// icons
import {
  IoChatboxEllipsesOutline as IoChatOut,
  IoInformationCircleOutline as IoInfoOut,
  IoStatsChartOutline as IoStatsOut,
  IoWalletOutline,
} from "react-icons/io5";

const PetById = () => {
  const testUser = {
    id: 1,
    username: "user",
    email: "email@email.com",
    photo: null,
    address: null,
    createdAt: "2023-03-12T12:05:35.599333",
    updatedAt: null,
    pets: [
      {
        id: 1,
        name: "pet name",
        price: 0.0,
        birthDay: "2023-03-11",
        gender: "female",
        photo: null,
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
      },
    ],
  };

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
      {
        id: 2,
        content: "Null 2 comentário",
        likes: 124,
      },
    ],
    createdAt: "2023-03-12T12:05:42.001851",
    updatedAt: null,
    forSale: true,
  };

  const navigate = useNavigate();

  const [user, setUser] = useState(testUser);
  const [pet, setPet] = useState(testPet);

  return (
    <PSGrid5050>
      <GridItem w="100%" p={SPACING_MEDIUM} bg={COLOR_WHITE}>
        <PSGallery item={pet} />
      </GridItem>
      <GridItem w="100%" p={SPACING_MEDIUM} bg={COLOR_WHITE_ALTERNATE}>
        <Stack gap={SPACING_SMALL}>
          <PetByIdTitle pet={pet} />
          {/*  */}
          <PSTextIcon
            icon={<IoChatOut />}
            value={`${pet.comments ? pet.comments.length : 0} comentários`}
          />
          {/*  */}
          <PSTextIcon icon={<IoInfoOut />} value="Informações Extras" />
          {/*  */}
          <PSTextIcon icon={<IoStatsOut />} value="Informações Extras" />
          <PSPetStats pet={pet} />
          {/*  */}
          {user && pet.forSale ? (
            <>
              <PSTextIcon icon={<IoWalletOutline />} value="Preço" />
              <PetBuyOptions pet={pet} petList={testUser.pets} />
            </>
          ) : (
            !user && (
              <Flex justifyContent="flex-end">
                <PSButton onClick={() => navigate("/sign-in")}>Entrar</PSButton>
              </Flex>
            )
          )}
        </Stack>
      </GridItem>
      <GridItem bg="#aad" w="100%">
        3
      </GridItem>
    </PSGrid5050>
  );
};

export default PetById;
