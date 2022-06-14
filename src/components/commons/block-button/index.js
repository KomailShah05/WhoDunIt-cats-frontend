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
  handleClick,
  secondary,
  data_bs_target,
  data_bs_slide,
  transparent_btn,
  data_bs_toggle,
  data_bs_dismiss,
  disable,
}) => {
  return (
    <div className="d-grid gap-2 block">
      <button
        className={`btn ${
          secondary
            ? "btn-secondary"
            : transparent_btn
            ? "btn-secondary block__bg-tranparent"
            : "btn-primary"
        }  block__btn-text`}
        type="button"
        name={name}
        onClick={handleClick}
        data-bs-target={data_bs_target}
        data-bs-toggle={data_bs_toggle}
        data-bs-dismiss={data_bs_dismiss}
        data-bs-slide={data_bs_slide}
        disabled={disable}
      >
        {showImg && <img src={imgPath} alt={imgPath} />}
        {text}
      </button>
    </div>
  );
};

export default BlockButton;
