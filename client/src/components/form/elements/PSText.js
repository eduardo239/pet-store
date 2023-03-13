import { Heading, Text } from "@chakra-ui/react";
import {
  FONT_SIZE_LARGE,
  FONT_SIZE_XLARGE,
} from "../../../helper/constants/dimensions";

const PSText = ({ title, subtitle, text, small, children, p }) => {
  if (title)
    return (
      <Heading as="h1" fontSize={FONT_SIZE_XLARGE} p={p}>
        {children}
      </Heading>
    );
  if (subtitle)
    return (
      <Heading as="h3" fontSize={FONT_SIZE_LARGE} p={p}>
        {children}
      </Heading>
    );
  if (text)
    return (
      <Text fontSize="md" p={p}>
        {children}
      </Text>
    );
  if (small)
    return (
      <Text fontSize="sm" p={p}>
        {children}
      </Text>
    );
  else
    return (
      <Text fontSize="md" p={p}>
        {children}
      </Text>
    );
};

export default PSText;
