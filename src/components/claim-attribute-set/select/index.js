// libraries
import React, { useState } from "react";

// components

import { DropdownButton, Dropdown } from "react-bootstrap";

// constants

// styles
import "./style.scss";

const Select = ({ heading, options }) => {
  const [selected, setSelected] = useState({});
  const handleSelect = (key, event) => {
    setSelected({ key, value: event.target.value });
  };

  return (
    <>
      <p className="text-white font-gouchi">{heading}</p>
      <DropdownButton
        id="dropdown-dark-button"
        variant="info"
        className=""
        onSelect={handleSelect}
        title={selected?.key || options[0]}
      >
        {options?.length > 0 &&
          options.map((item, index) => {
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
