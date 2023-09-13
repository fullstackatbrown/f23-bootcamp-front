import { Box, Divider, Text, VStack } from "@chakra-ui/react";
import Comment from "./Comment";

interface Props {
  title: string;
  body: string;
  postedAt: Date;
}

const Post = ({ title, body, postedAt }: Props) => {
  // TODO: Implement a component representing an already existing post
  return;
};

export default Post;
