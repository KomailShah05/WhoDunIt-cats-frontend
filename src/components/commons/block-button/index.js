// libraries
import React from "react";

// styles
import "./style.scss";

// assets

const BlockButton = ({ showImg, text, imgPath }) => {
  return (
    <div class="d-grid gap-2 block">
      <button class="btn btn-primary block__btn-text" type="button">
        {showImg && <img src={imgPath} alt={imgPath} />}
        {text}
      </button>
    </div>
  );
};

export default BlockButton;
