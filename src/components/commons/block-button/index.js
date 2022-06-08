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
  data_bs_target,
  data_bs_slide,
  transparent_btn,
}) => {
  return (
    <div class="d-grid gap-2 block">
      <button
        class={`btn ${
          secondary
            ? "btn-secondary"
            : transparent_btn
            ? "btn-secondary block__bg-tranparent"
            : "btn-primary"
        }  block__btn-text`}
        type="button"
        name={name}
        onClick={handleModalName}
        data-bs-target={data_bs_target}
        data-bs-slide={data_bs_slide}
      >
        {showImg && <img src={imgPath} alt={imgPath} />}
        {text}
      </button>
    </div>
  );
};

export default BlockButton;
