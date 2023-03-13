import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { SPACING_SMALL } from "../../helper/constants/dimensions";
import PSButton from "../form/elements/PSButton";
import AddNewComment from "./AddNewComment";

const CommentList = () => {
  return (
    <div>
      <Stack>
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
