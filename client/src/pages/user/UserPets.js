import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../helper/hooks/useQuery";
// chakra
import {
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
// compoenentes
import AddPet from "../../components/form/pet/AddPet";
import AllPets from "../../components/form/pet/AllPets";
import PSTextIcon from "../../components/form/elements/PSTextIcon";
import PSGridAutoFr from "../../components/layout/PSGridAutoFr";
// constantes
import { COLOR_WHITE } from "../../helper/constants/colors";
import { LABEL_ADD_PETS, LABEL_PETS } from "../../helper/constants";
import {
  SPACING_MEDIUM,
  SPACING_SMALL,
} from "../../helper/constants/dimensions";
// icons
import {
  IoAtCircleOutline,
  IoBusOutline,
  IoInformationCircleOutline as IoInfoOut,
  IoPersonCircleOutline,
} from "react-icons/io5";
// contexto

const UserPets = () => {
  const testUserPets = [
    {
      id: 1,
      name: "pet name",
      price: 0.0,
      birthDay: "2023-03-11",
      gender: "female",
      photo: null,
      owner: {
        id: 1,
        username: "user",
        email: "email@email.com",
        photo: null,
        address: {
          id: 1,
          cep: "01000100",
          street: "Rua Atualizada",
          number: "100",
          complement: "APTO 1",
          city: "Campinas",
          state: "Sao Paulo",
          createdAt: "2023-03-12T13:34:01.478793",
          updatedAt: "2023-03-12T13:34:01.486284",
        },
        createdAt: "2023-03-12T12:05:35.599333",
        updatedAt: "2023-03-12T13:34:01.486284",
      },
      forSale: false,
    },
    {
      id: 2,
      name: "pet name",
      price: 0.0,
      birthDay: "2023-03-11",
      gender: "female",
      photo: null,
      owner: {
        id: 1,
        username: "user",
        email: "email@email.com",
        photo: null,
        address: {
          id: 1,
          cep: "01000100",
          street: "Rua Atualizada",
          number: "100",
          complement: "APTO 1",
          city: "Campinas",
          state: "Sao Paulo",
          createdAt: "2023-03-12T13:34:01.478793",
          updatedAt: "2023-03-12T13:34:01.486284",
        },
        createdAt: "2023-03-12T12:05:35.599333",
        updatedAt: "2023-03-12T13:34:01.486284",
      },
      forSale: false,
    },
  ];

  const testUser = {
    id: 1,
    username: "user",
    email: "email@email.com",
    photo: null,
    createdAt: "2023-03-12T12:05:35.599333",
    updatedAt: null,
  };
  // TODO: remover pets e endereço do usuário
  const testPet = {
    name: "pet name",
    price: 0,
    birthDay: "2023-03-11T09:45:35.195315081",
    isForSale: false,
    gender: "female",
    owner: {
      id: 1,
    },
  };

  const navigate = useNavigate();
  const query = useQuery();

  // const {} = useContext(UserContext);

  const [tab, setTab] = useState(0);
  const [user, setUser] = useState(testUser);
  const [pet, setPet] = useState(testPet);
  const [pets, setPets] = useState(testUserPets);

  const handleTabChange = (index) => {
    setTab(index);
    if (query) {
      switch (index) {
        case 0:
          navigate(`?tab=${LABEL_PETS}`);
          break;
        case 1:
          navigate(`?tab=${LABEL_ADD_PETS}`);
          break;
        default:
          navigate(`?tab=${LABEL_PETS}`);
      }
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (query) {
        switch (query.get("tab")) {
          case LABEL_PETS:
            setTab(0);
            break;
          case LABEL_ADD_PETS:
            setTab(1);
            break;
          default:
            setTab(0);
        }
      }
    }
    return () => {
      mounted = false;
    };
  }, [user, query]);

  if (user)
    return (
      <PSGridAutoFr gap={SPACING_SMALL}>
        <GridItem w="100%" bg={COLOR_WHITE} p={SPACING_SMALL}>
          <PSTextIcon icon={<IoInfoOut />} value="Informações Extras" />
          <PSTextIcon icon={<IoAtCircleOutline />} value="Username" />
        </GridItem>
        <GridItem w="100%" bg={COLOR_WHITE} p={SPACING_SMALL}>
          <Tabs
            isManual
            size="md"
            index={tab}
            defaultIndex={0}
            onChange={(index) => handleTabChange(index)}
          >
            {/* abas */}
            <TabList>
              <Tab>Meus Pets</Tab>
              <Tab>Adicionar</Tab>
            </TabList>
            {/* conteúdo */}
            <TabPanels>
              <TabPanel>
                <PSTextIcon
                  icon={<IoPersonCircleOutline />}
                  value="Todos Meus Pets"
                />
                <AllPets pets={pets} />
              </TabPanel>
              <TabPanel>
                <PSTextIcon
                  icon={<IoBusOutline />}
                  value="Adicionar um novo Pet"
                />
                <AddPet data={pet} setData={setPet} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
      </PSGridAutoFr>
    );
  else
    return (
      <PSGridAutoFr>
        <GridItem w="100%" p={SPACING_MEDIUM} bg={COLOR_WHITE}>
          <PSTextIcon icon={<IoInfoOut />} value="Informações Extras" />
          <PSTextIcon
            icon={<IoAtCircleOutline />}
            value="Usuário não encontrado"
          />
        </GridItem>
        <GridItem w="100%" p={SPACING_MEDIUM} bg={COLOR_WHITE}>
          Usuário não encontrado
        </GridItem>
      </PSGridAutoFr>
    );
};

export default UserPets;
