import { Heading, Text } from "@chakra-ui/react";
import {
  FONT_SIZE_LARGE,
  FONT_SIZE_XLARGE,
} from "../../../helper/constants/dimensions";

const PSText = ({ title, subtitle, text, small, children }) => {
  if (title)
    return (
      <Heading as="h1" fontSize={FONT_SIZE_XLARGE}>
        {children}
      </Heading>
    );
  if (subtitle)
    return (
      <Heading as="h3" fontSize={FONT_SIZE_LARGE}>
        {children}
      </Heading>
    );
  if (text) return <Text fontSize="md">{children}</Text>;
  if (small) return <Text fontSize="sm">{children}</Text>;
  else return <Text fontSize="md">{children}</Text>;
};

export default PSText;
