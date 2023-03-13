import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

const PSTextarea = ({
  req = false,
  dis = false,
  name,
  type,
  label,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <FormControl isRequired={req}>
      <FormLabel fontSize="xs">{label}</FormLabel>
      <Textarea
        p={type === "color" && "0"}
        disabled={dis}
        name={name}
        type={type}
        value={value}
        placeholder={label}
        onChange={onChange}
        onBlur={onBlur}
        step={type === "number" ? "0.01" : undefined}
        size="md"
        outline="none"
        _focus={{ boxShadow: "none" }}
      />
    </FormControl>
  );
};

export default PSTextarea;
