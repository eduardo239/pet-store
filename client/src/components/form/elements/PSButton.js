import { Button } from "@chakra-ui/react";
import {
  FORM_BORDER_RADIUS,
  FORM_BUTTON_MIN_WIDTH,
} from "../../../helper/constants/dimensions";

/**
 *
 * @variant {variant} solid, ghost, outline, or link.
 * @returns
 */
const PSButton = ({
  w = "auto",
  children,
  variant = "solid",
  size = "md",
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      w={w}
      pt={1}
      colorScheme="messenger"
      minW={FORM_BUTTON_MIN_WIDTH}
      type={type}
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      borderRadius={FORM_BORDER_RADIUS}
    >
      {children}
    </Button>
  );
};

export default PSButton;
