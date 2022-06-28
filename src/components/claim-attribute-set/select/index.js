// libraries
import React from "react";

// components

import { DropdownButton, Dropdown } from "react-bootstrap";

// constants

// styles
import "./style.scss";

const Select = ({
  heading,
  options,
  element_name,
  selectedAttributes,
  setselectedAttributes,
  loading,
  index,
}) => {
  const handleSelect = (key) => {
    if (options[0] === key) {
      setselectedAttributes({
        ...selectedAttributes,
        [element_name]: null,
      });
      return;
    }
    setselectedAttributes({
      ...selectedAttributes,
      [element_name]: key,
    });
  };

  return (
    <>
      <p className="text-white font-gouchi">{heading}</p>
      <DropdownButton
        id="dropdown-dark-button"
        key={index}
        variant="dark"
        className=""
        onSelect={handleSelect}
        title={selectedAttributes[element_name] || options[0]}
        disabled={loading}
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
