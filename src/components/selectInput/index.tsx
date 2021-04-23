import React from "react";

type TypeSelectInput = {
  select: any;
  list: string[];
  selected: string;
};

const SelectInput = ({ select, list, selected }: TypeSelectInput) => {
  const handleChange = (value: string) => {
    select(value);
  };
  return (
    <select id="options" onChange={(ev) => handleChange(ev.target.value)}>
      {list.map((item) => (
        <option key={item} value={item} selected={selected === item}>
          {item}
        </option>
      ))}
    </select>
  );
};
export default SelectInput;
