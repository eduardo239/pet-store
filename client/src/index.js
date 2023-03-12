import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
// contexto
import { ContextUser } from "./helper/context/User";
import { ContextPet } from "./helper/context/Pets";
// componentes
import App from "./App";
// estilos
import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <ContextUser>
          <ContextPet>
            <App />
          </ContextPet>
        </ContextUser>
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
