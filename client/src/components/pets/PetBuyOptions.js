import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { checkIfObjectIsInTheList } from "../../helper/functions";
import PSButton from "../form/elements/PSButton";
import { UserContext } from "../../helper/context/User";

const PetBuyOptions = ({ pet, petList = [] }) => {
  const navigate = useNavigate();
  // contexto
  const { orderList, setOrderPetList } = useContext(UserContext);

  const handleBuy = () => {
    if (orderList.length === 0) {
      setOrderPetList([...orderList, pet]);
    }
    navigate(`/pet/${pet.id}/buy`);
  };

  const handleAddToCart = () => {
    //
  };

  return (
    <Flex justifyContent="flex-end" gap={1}>
      {checkIfObjectIsInTheList(pet, petList) ? (
        <PSButton
          onClick={handleAddToCart}
          disabled={checkIfObjectIsInTheList(pet, petList)}
        >
          Já está no carrinho
        </PSButton>
      ) : (
        <PSButton
          onClick={handleAddToCart}
          disabled={checkIfObjectIsInTheList(pet, petList)}
        >
          Adicionar ao carrinho
        </PSButton>
      )}

      <PSButton onClick={handleBuy}>Comprar</PSButton>
    </Flex>
  );
};

export default PetBuyOptions;
