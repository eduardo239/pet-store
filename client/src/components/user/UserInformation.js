//
import PSTextIcon from "../form/elements/PSTextIcon";
import UserAvatar from "./UserAvatar";
//
import { IoAtCircleOutline, IoInformationOutline } from "react-icons/io5";

const UserInformation = () => {
  return (
    <>
      <PSTextIcon icon={<IoInformationOutline />} value="Informações Extras" />
      {/*  */}
      <UserAvatar avatar={null} />
      {/*  */}
      <PSTextIcon icon={<IoAtCircleOutline />} value="Username" />
    </>
  );
};

export default UserInformation;
