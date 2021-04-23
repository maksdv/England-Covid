import React from "react";
import './style.css';

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
    <div className='container'>
      <select id="options" onChange={(ev) => handleChange(ev.target.value)}>
        {list.map((item) => (
          <option key={item} value={item} selected={selected === item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectInput;
