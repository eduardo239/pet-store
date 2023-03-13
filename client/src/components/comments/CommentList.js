import { Flex, Stack } from "@chakra-ui/react";
import { IoChatboxOutline } from "react-icons/io5";
import { SPACING_SMALL } from "../../helper/constants/dimensions";
import PSButton from "../form/elements/PSButton";
import PSTextIcon from "../form/elements/PSTextIcon";
import AddNewComment from "./AddNewComment";

const CommentList = () => {
  return (
    <div>
      <Stack m={SPACING_SMALL}>
        <PSTextIcon icon={<IoChatboxOutline />} value="Comentários" />

        <AddNewComment />

        <Flex justifyContent="flex-end" gap={1} p={SPACING_SMALL}>
          <PSButton>Enviar</PSButton>
        </Flex>
      </Stack>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  );
};

export default CommentList;
