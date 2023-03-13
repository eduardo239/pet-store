import { useContext, useEffect, useState } from "react";
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
import AddNewPetWrapper from "../../components/form/pet/AddNewPetWrapper";
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
import { UserContext } from "../../helper/context/User";
import UserInformation from "../../components/user/UserInformation";
// contexto

const UserPets = () => {
  const navigate = useNavigate();
  const query = useQuery();

  const { user } = useContext(UserContext);

  const [tab, setTab] = useState(0);

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
          <UserInformation />
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
                <AllPets pets={user.pets} />
              </TabPanel>
              <TabPanel>
                <PSTextIcon
                  icon={<IoBusOutline />}
                  value="Adicionar um novo Pet"
                />
                <AddNewPetWrapper />
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
