import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// compoenentes
import {
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import PSTextIcon from "../../components/form/elements/PSTextIcon";
import PSGridAutoFr from "../../components/layout/PSGridAutoFr";
import EditUserInfo from "../../components/form/user/EditUserInfo";
// constantes
import { COLOR_WHITE } from "../../helper/constants/colors";
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
import { LABEL_ADDRESS, LABEL_USER } from "../../helper/constants";
// contexto
import { useQuery } from "../../helper/hooks/useQuery";
import EditAddress from "../../components/form/address/EditAddress";
import UserAvatar from "../../components/user/UserAvatar";
// assets

const UserInfo = () => {
  const testUser = {
    id: 1,
    username: "user",
    email: "email@email.com",
    photo: null,
    createdAt: "2023-03-12T12:05:35.599333",
    updatedAt: null,
  };
  // TODO: remover pets e endereço do usuário
  const testAddress = {
    cep: "01000100",
    street: "Rua Atualizada",
    number: "100",
    complement: "APTO 1",
    city: "Campinas",
    state: "Sao Paulo",
  };

  const navigate = useNavigate();
  const query = useQuery();

  // const {} = useContext(UserContext);

  const [tab, setTab] = useState(0);
  const [user, setUser] = useState(testUser);
  const [address, setAddress] = useState(testAddress);

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
      <PSGridAutoFr gap={SPACING_SMALL}>
        <GridItem w="100%" bg={COLOR_WHITE} p={SPACING_SMALL}>
          <PSTextIcon icon={<IoInfoOut />} value="Informações Extras" />
          {/*  */}
          <UserAvatar avatar={null} />
          {/*  */}
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
                <EditUserInfo data={user} setData={setUser} />
              </TabPanel>
              <TabPanel>
                <PSTextIcon icon={<IoBusOutline />} value="Endreço" />
                <EditAddress data={address} setData={setAddress} />
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

export default UserInfo;
