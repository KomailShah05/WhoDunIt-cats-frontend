// libraries
import React, { useState } from "react";

// components

import { DropdownButton, Dropdown } from "react-bootstrap";

// constants

// styles
import "./style.scss";

const Select = ({ heading, options }) => {
  const list = [
    { key: "Yellow", value: "yellow" },
    { key: "Blue", value: "blue" },
    { key: "Green", value: "green" },
  ];
  const [selected, setSelected] = useState({});
  const handleSelect = (key, event) => {
    setSelected({ key, value: event.target.value });
  };

  return (
    <>
      <p className="text-white font-gouchi">{heading}</p>
      {/* <select
        className="form-select form-select-sm custom-select"
        aria-label=".form-select-sm example"
      >
        {options?.length > 0 &&
          options.map((item, index) => (
            <>
              <option value={item}>{item}</option>
            </>
          ))}
      </select> */}

      <DropdownButton
        id="dropdown-dark-button"
        variant="info"
        className="floatRight"
        onSelect={handleSelect}
        title={selected?.key || options[0]}
      >
        {options.map((item, index) => {
          return (
            <Dropdown.Item key={index} eventKey={item}>
              {item}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </>
  );
};

export default Select;
