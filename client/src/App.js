import { Routes, Route } from "react-router-dom";
// páginas
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Pets from "./pages/pet/Pets";
import PetById from "./pages/pet/PetById";
import PetByIdBuy from "./pages/pet/PetByIdBuy";
import UserInfo from "./pages/user/UserInfo";
import UserPets from "./pages/user/UserPets";
// chakra
import { Container, Flex } from "@chakra-ui/react";
// menu
import MainMenu from "./components/menu/MainMenu";
// constantes
import {
  COLOR_BLACK_ALTERNATE,
  COLOR_WHITE_ALTERNATE,
} from "./helper/constants/colors";

function App() {
  return (
    <Flex bg={COLOR_BLACK_ALTERNATE}>
      <Container bg={COLOR_WHITE_ALTERNATE} maxW="1060px" minH="100vh">
        <MainMenu />
        <Routes>
          <Route exact path="/" element={<Pets />} />
          <Route exact path="/pet/:id" element={<PetById />} />
          <Route exact path="/pet/:id/buy" element={<PetByIdBuy />} />
          {/*  */}
          <Route exact path="/home" element={<Home />} />
          {/*  */}
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          {/*  */}
          <Route exact path="/user" element={<UserInfo />} />
          <Route exact path="/user-pets" element={<UserPets />} />
        </Routes>
      </Container>
    </Flex>
  );
}

export default App;
