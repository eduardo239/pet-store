import { useState } from "react";
import { Link } from "react-router-dom";
// chakra
import { Box, Container, VStack } from "@chakra-ui/react";
// componentes
import PSText from "../../components/form/elements/PSText";
import PSButton from "../../components/form/elements/PSButton";
// form
import SignUpForm from "../../components/form/sign/SignUpForm";
// constantes
import { COLOR_WHITE, FORM_BORDER_COLOR } from "../../helper/constants/colors";
import {
  FORM_MAX_WIDTH,
  FORM_MIN_WIDTH,
  SPACING_BIG,
  SPACING_MEDIUM,
} from "../../helper/constants/dimensions";
import { FORM_SHADOW } from "../../helper/constants/shadows";

const SignUp = () => {
  const [userForm, setUserForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userForm);
  };

  return (
    <VStack>
      <Container
        shadow={FORM_SHADOW}
        p={SPACING_BIG}
        bg={COLOR_WHITE}
        maxW={FORM_MAX_WIDTH}
        minW={FORM_MIN_WIDTH}
        borderWidth={1}
        borderColor={FORM_BORDER_COLOR}
      >
        <PSText title>Registro</PSText>

        <Box>
          <form onSubmit={handleSubmit}>
            <SignUpForm data={userForm} setData={setUserForm} />

            <PSButton w="100%" type="submit">
              Registrar
            </PSButton>
          </form>

          <Box pt={SPACING_MEDIUM}>
            <Link to="/sign-in">Ainda não tem uma conta? Crie uma aqui!</Link>
          </Box>
        </Box>
      </Container>
    </VStack>
  );
};

export default SignUp;
