import { Avatar, Flex } from "@chakra-ui/react";
import defaultAvatar from "../../assets/images/logo-black.png";

const UserAvatar = ({ avatar }) => {
  if (avatar)
    return (
      <Flex justifyContent="center">
        <Avatar size="2xl" src={avatar} />
      </Flex>
    );
  else
    return (
      <Flex justifyContent="center">
        <Avatar size="2xl" src={defaultAvatar} />
      </Flex>
    );
};

export default UserAvatar;
