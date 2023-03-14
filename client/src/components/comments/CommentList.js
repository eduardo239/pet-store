import { Flex, Stack } from "@chakra-ui/react";
import { IoChatboxOutline } from "react-icons/io5";
import { SPACING_SMALL } from "../../helper/constants/dimensions";
import PSButton from "../form/elements/PSButton";
import PSTextIcon from "../form/elements/PSTextIcon";
import AddNewComment from "./AddNewComment";
import CommentItem from "./CommentItem";

const commentTest = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
  },
];

const CommentList = ({ user }) => {
  const forEachItems = () => {
    if (commentTest.length > 0) {
      return commentTest.map((comment, idx) => (
        <Stack shadow="md" p={SPACING_SMALL}>
          <CommentItem key={comment.id} comment={comment} />
        </Stack>
      ));
    }
    return <Flex>Nada encontrado</Flex>;
  };

  return (
    <Stack m={SPACING_SMALL}>
      <PSTextIcon icon={<IoChatboxOutline />} value="Comentários" />

      <AddNewComment />

      <Flex justifyContent="flex-end" gap={1} p={SPACING_SMALL}>
        <PSButton>Enviar</PSButton>
      </Flex>

      {commentTest && commentTest.length > 0 ? (
        forEachItems()
      ) : (
        <div>não tem</div>
      )}
    </Stack>
  );
};

export default CommentList;
