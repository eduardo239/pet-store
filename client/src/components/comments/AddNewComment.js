import { Stack } from "@chakra-ui/react";
import React from "react";
import { SPACING_SMALL } from "../../helper/constants/dimensions";
import PSTextarea from "../form/elements/PSTextarea";

const AddNewComment = () => {
  return (
    <Stack px={SPACING_SMALL} pt={SPACING_SMALL}>
      <PSTextarea />
    </Stack>
  );
};

export default AddNewComment;
