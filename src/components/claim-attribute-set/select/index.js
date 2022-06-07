// libraries
import React from "react";

// constants

// styles
import "./style.scss";

const Select = ({ heading, options }) => {
  return (
    <>
      <p className="text-white font-gouchi">{heading}</p>
      <select
        class="form-select form-select-sm custom-select"
        aria-label=".form-select-sm example"
      >
        {options?.length > 0 &&
          options.map((item, index) => (
            <>
              <option value={item}>{item}</option>
            </>
          ))}
      </select>
    </>
  );
};

export default Select;
