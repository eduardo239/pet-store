import { Flex, Stack } from "@chakra-ui/react";
// componentes
import PSInput from "../elements/PSInput";
// constantes
import {
  SPACING_MEDIUM,
  SPACING_XSMALL,
} from "../../../helper/constants/dimensions";
import PSButton from "../elements/PSButton";

const EditAddressForm = ({ data, setData, onClose }) => {
  const handleAdd = () => {
    console.log(data);
  };

  return (
    <Stack gap={SPACING_XSMALL} my={SPACING_MEDIUM}>
      <PSInput
        req
        name="cep"
        type="text"
        label="CEP"
        onChange={(val) => setData({ ...data, cep: val.target.value })}
      />
      <PSInput
        req
        name="number"
        type="text"
        label="Número"
        onChange={(val) => setData({ ...data, number: val.target.value })}
      />
      <PSInput
        req
        name="complement"
        type="text"
        label="Complemento"
        onChange={(val) => setData({ ...data, complement: val.target.value })}
      />
      <PSInput
        req
        name="city"
        type="text"
        label="Cidade"
        onChange={(val) => setData({ ...data, city: val.target.value })}
      />
      <PSInput
        req
        name="state"
        type="text"
        label="Estado"
        onChange={(val) => setData({ ...data, state: val.target.value })}
      />
      <Flex justifyContent="flex-end" gap={1}>
        <PSButton onClick={handleAdd}>Salvar</PSButton>
        <PSButton onClick={onClose}>Sair</PSButton>
      </Flex>
    </Stack>
  );
};

export default EditAddressForm;
