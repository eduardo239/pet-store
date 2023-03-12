import { Flex, Stack } from "@chakra-ui/react";
// componentes
import PSInput from "../elements/PSInput";
// constantes
import {
  SPACING_MEDIUM,
  SPACING_XSMALL,
} from "../../../helper/constants/dimensions";
import PSButton from "../elements/PSButton";

const EditUserForm = ({ data, setData, onClose }) => {
  const handleSave = () => {
    console.log(data);
  };

  return (
    <Stack gap={SPACING_XSMALL} my={SPACING_MEDIUM}>
      <PSInput
        req
        name="username"
        type="text"
        label="Username"
        onChange={(val) => setData({ ...data, username: val.target.value })}
      />
      <PSInput
        req
        name="password"
        type="password"
        label="Senha"
        onChange={(val) => setData({ ...data, password: val.target.value })}
      />
      <PSInput
        req
        name="newPassword"
        type="password"
        label="Nova Senha"
        onChange={(val) => setData({ ...data, newPassword: val.target.value })}
      />
      <PSInput
        req
        name="email"
        type="email"
        label="E-mail"
        onChange={(val) => setData({ ...data, email: val.target.value })}
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
        <PSButton onClick={handleSave}>Salvar</PSButton>
        <PSButton onClick={onClose}>Sair</PSButton>
      </Flex>
    </Stack>
  );
};

export default EditUserForm;
