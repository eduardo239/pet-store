import { Select } from "@chakra-ui/react";

const PSSelect = ({ items = [] }) => {
  return (
    <Select placeholder="Select option">
      {items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  );
};

export default PSSelect;
