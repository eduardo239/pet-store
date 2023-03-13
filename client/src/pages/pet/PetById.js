import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// chakra
import { Flex, GridItem, Stack } from "@chakra-ui/react";
// constantes
import {
  SPACING_MEDIUM,
  SPACING_SMALL,
} from "../../helper/constants/dimensions";
import {
  COLOR_WHITE,
  COLOR_WHITE_ALTERNATE,
} from "../../helper/constants/colors";
import { R_COLSPAN_1_2 } from "../../helper/constants/responsive";
// componentes
import PSGallery from "../../components/images/PSGallery";
import PSPetStats from "../../components/pets/PSPetStats";
import PSGrid5050 from "../../components/layout/PSGrid5050";
import PetByIdTitle from "../../components/pets/PetByIdTitle";
import PSButton from "../../components/form/elements/PSButton";
import CommentList from "../../components/comments/CommentList";
import PetBuyOptions from "../../components/pets/PetBuyOptions";
import PSTextIcon from "../../components/form/elements/PSTextIcon";
// icons
import {
  IoChatboxEllipsesOutline as IoChatOut,
  IoInformationCircleOutline as IoInfoOut,
  IoStatsChartOutline as IoStatsOut,
  IoWalletOutline,
} from "react-icons/io5";
// contexto
import { PetContext } from "../../helper/context/Pets";
import { UserContext } from "../../helper/context/User";
import PSText from "../../components/form/elements/PSText";

const PetById = () => {
  const { pet } = useContext(PetContext);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <PSGrid5050 gap={1}>
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
          <PSTextIcon icon={<IoInfoOut />} value="Descrição" />
          <PSText small p={SPACING_SMALL}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            similique veniam eius inventore voluptatibus quia.
          </PSText>
          {/*  */}
          <PSTextIcon icon={<IoStatsOut />} value="Informações Extras" />
          <PSPetStats pet={pet} />
          {/*  */}
          {user && pet.forSale ? (
            <>
              <PSTextIcon icon={<IoWalletOutline />} value="Preço" />
              <PetBuyOptions pet={pet} petList={user.pets} />
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
      <GridItem colSpan={R_COLSPAN_1_2} bg={COLOR_WHITE}>
        <CommentList />
      </GridItem>
    </PSGrid5050>
  );
};

export default PetById;
