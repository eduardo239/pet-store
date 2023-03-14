import { Avatar, Box, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { IoRepeat, IoTrashOutline } from "react-icons/io5";
import {
  SPACING_SMALL,
  SPACING_XSMALL,
} from "../../helper/constants/dimensions";
import PSGridAutoFr from "../layout/PSGridAutoFr";
import defaultAvatar from "../../assets/avatar/avatar-sm.png";
import { R_GRID_AUTO70_1FR_TO_1FR } from "../../helper/constants/responsive";

const CommentItem = ({ comment }) => {
  const handleDeleteComment = (e, payload) => {
    e.preventDefault();
    console.log(payload);
  };

  if (comment)
    return (
      <PSGridAutoFr templateColumns={R_GRID_AUTO70_1FR_TO_1FR}>
        <Stack>
          <Avatar rounded="full" size="md" src={defaultAvatar} />
        </Stack>
        <Box>
          <Text fontSize="xs" color="purple.500">
            @usuário id: {comment.id} - comentário id: {comment.id}
          </Text>
          <Flex alignItems="center" justifyContent="space-between">
            <Text color="gray.700" fontSize="sm">
              {comment.content}
            </Text>

            <Flex alignItems="center">
              <IconButton
                size="sm"
                variant="ghost"
                aria-label="open menu"
                icon={<IoRepeat />}
              />
              <IconButton
                size="sm"
                variant="ghost"
                aria-label="open menu"
                icon={<IoTrashOutline />}
                onClick={(e) => handleDeleteComment(e, comment.id)}
              />
            </Flex>
          </Flex>
        </Box>
      </PSGridAutoFr>
    );
};

export default CommentItem;
