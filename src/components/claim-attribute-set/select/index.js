// libraries
import React from "react";

// styles
import "./style.scss";

const Select = () => {
  return (
    <select
      class="form-select form-select-sm custom-select"
      aria-label=".form-select-sm example"
    >
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
};

export default Select;
