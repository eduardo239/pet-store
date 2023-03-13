import { Select } from "@chakra-ui/react";

const PSSelect = ({ items = [], setValue }) => {
  return (
    <Select
      placeholder="Selecione uma opção"
      onChange={(v) => setValue(v.target.value)}
    >
      {items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  );
};

export default PSSelect;
