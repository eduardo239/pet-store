import { Flex, Stack } from "@chakra-ui/react";
// componentes
import PSInput from "../elements/PSInput";
// constantes
import {
  SPACING_MEDIUM,
  SPACING_XSMALL,
} from "../../../helper/constants/dimensions";
import PSButton from "../elements/PSButton";

const AddPetForm = ({ data, setData, onClose }) => {
  const handleAdd = () => {
    console.log(data);
  };

  return (
    <Stack gap={SPACING_XSMALL} my={SPACING_MEDIUM}>
      <PSInput
        req
        name="name"
        type="text"
        label="CEP"
        onChange={(val) => setData({ ...data, name: val.target.value })}
      />
      <PSInput
        req
        name="price"
        type="number"
        label="Preço"
        onChange={(val) => setData({ ...data, price: val.target.value })}
      />
      <PSInput
        req
        name="gender"
        type="email"
        label="Gênero"
        onChange={(val) => setData({ ...data, gender: val.target.value })}
      />
      <PSInput
        req
        name="birthDay"
        type="date"
        label="Data de nascimento"
        onChange={(val) => setData({ ...data, birthDay: val.target.value })}
      />
      <Flex justifyContent="flex-end" gap={1}>
        <PSButton onClick={handleAdd}>Salvar</PSButton>
        <PSButton onClick={onClose}>Sair</PSButton>
      </Flex>
    </Stack>
  );
};

export default AddPetForm;
