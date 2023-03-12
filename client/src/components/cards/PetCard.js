import { useNavigate } from "react-router-dom";
// chakra
import {
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Image,
  VStack,
} from "@chakra-ui/react";
// constantes
import { CARD_SHADOW } from "../../helper/constants/shadows";
import { SPACING_SMALL } from "../../helper/constants/dimensions";
// componentes
import PSText from "../form/elements/PSText";
import PSButton from "../form/elements/PSButton";
// assets
import defaultImage from "../../assets/images/logo-no-background.png";

const PetCard = ({ pet }) => {
  const navigate = useNavigate();

  return (
    <Card w="245px" shadow={CARD_SHADOW} borderRadius="0" p={SPACING_SMALL}>
      <CardBody>
        <VStack spacing="2" mb={SPACING_SMALL}>
          <PSText text>
            ID # {pet.id} - {pet.name}
          </PSText>
        </VStack>
        <Image
          boxSize="235px"
          objectFit="cover"
          borderRadius="3px"
          mb={SPACING_SMALL}
          alt={pet.name ? `Pet ${pet.name}` : "Pet Store"}
          src={pet.photo ? pet.photo : defaultImage}
        />

        {pet.forSale ? (
          <VStack>
            <PSText small>Preço</PSText>

            {pet.price ? (
              <PSText>`$${pet.price}`</PSText>
            ) : (
              <PSText small>Não está à venda</PSText>
            )}
          </VStack>
        ) : (
          <VStack>
            <PSText small>Informação</PSText>
            <PSText small>Não está à venda</PSText>
          </VStack>
        )}
      </CardBody>

      <Container px={SPACING_SMALL}>
        <Divider />
      </Container>

      <CardFooter>
        <PSButton variant="solid" onClick={() => navigate(`/pet/${pet.id}`)}>
          Ver Mais
        </PSButton>
      </CardFooter>
    </Card>
  );
};

export default PetCard;
