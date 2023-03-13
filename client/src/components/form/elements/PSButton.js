import { Button } from "@chakra-ui/react";
import { FORM_BUTTON_MIN_WIDTH } from "../../../helper/constants/dimensions";

/**
 *
 * @variant {variant} solid, ghost, outline, or link.
 * @returns
 */
const PSButton = ({
  w = "auto",
  children,
  variant = "solid",
  size = "sm",
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      w={w}
      colorScheme="messenger"
      minW={FORM_BUTTON_MIN_WIDTH}
      type={type}
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      borderRadius={0}
    >
      {children}
    </Button>
  );
};

export default PSButton;
