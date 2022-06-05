// libraries
import React from "react";

// styles
import "./style.scss";

// assets

const BlockButton = ({
  showImg,
  text,
  imgPath,
  name,
  handleModalName,
  secondary,
}) => {
  return (
    <div class="d-grid gap-2 block">
      <button
        class={`btn ${
          secondary ? "btn-secondary" : "btn-primary"
        }  block__btn-text`}
        type="button"
        name={name}
        onClick={handleModalName}
      >
        {showImg && <img src={imgPath} alt={imgPath} />}
        {text}
      </button>
    </div>
  );
};

export default BlockButton;
