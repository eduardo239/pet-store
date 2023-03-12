import { Stack } from "@chakra-ui/react";
// componentes
import PSInput from "../elements/PSInput";
// constantes
import {
  SPACING_MEDIUM,
  SPACING_XSMALL,
} from "../../../helper/constants/dimensions";

const SignInForm = ({ data, setData }) => {
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
    </Stack>
  );
};

export default SignInForm;
