import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// chakra
import {
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useQuery } from "../../helper/hooks/useQuery";
// compoenentes
import PSGridAutoFr from "../../components/layout/PSGridAutoFr";
import PSTextIcon from "../../components/form/elements/PSTextIcon";
import EditUserWrapper from "../../components/form/user/EditUserWrapper";
import EditAddressWrapper from "../../components/form/address/EditAddressWrapper";
// constantes
import { COLOR_WHITE } from "../../helper/constants/colors";
import {
  SPACING_MEDIUM,
  SPACING_SMALL,
} from "../../helper/constants/dimensions";
import { LABEL_ADDRESS, LABEL_USER } from "../../helper/constants";
// icons
import {
  IoAtCircleOutline,
  IoBusOutline,
  IoInformationCircleOutline as IoInfoOut,
  IoPersonCircleOutline,
} from "react-icons/io5";
// contexto
import { UserContext } from "../../helper/context/User";
import UserInformation from "../../components/user/UserInformation";
import { R_GRID_AUTO300_1FR_TO_1FR } from "../../helper/constants/responsive";
// assets

const UserInfo = () => {
  // TODO: remover pets e endereço do usuário

  const navigate = useNavigate();
  const query = useQuery();

  const { user } = useContext(UserContext);

  const [tab, setTab] = useState(0);

  const handleTabChange = (index) => {
    setTab(index);
    if (query) {
      switch (index) {
        case 0:
          navigate(`?tab=${LABEL_USER}`);
          break;
        case 1:
          navigate(`?tab=${LABEL_ADDRESS}`);
          break;
        default:
          navigate(`?tab=${LABEL_USER}`);
      }
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (query) {
        switch (query.get("tab")) {
          case LABEL_USER:
            setTab(0);
            break;
          case LABEL_ADDRESS:
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
      <PSGridAutoFr
        gap={SPACING_SMALL}
        templateColumns={R_GRID_AUTO300_1FR_TO_1FR}
      >
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
              <Tab>Informações</Tab>
              <Tab>Endereço</Tab>
            </TabList>
            {/* conteúdo */}
            <TabPanels>
              <TabPanel>
                <PSTextIcon
                  icon={<IoPersonCircleOutline />}
                  value="Informações"
                />
                <EditUserWrapper data={user} />
              </TabPanel>

              <TabPanel>
                <PSTextIcon icon={<IoBusOutline />} value="Endreço" />

                <EditAddressWrapper data={user.address} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
      </PSGridAutoFr>
    );
  else
    return (
      <PSGridAutoFr templateColumns={R_GRID_AUTO300_1FR_TO_1FR}>
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

export default UserInfo;
