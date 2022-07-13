// libraries
import React, { useEffect } from "react";

// styles
import "./style.scss";

// assets
import { walking_cats, cat1, cat2, cat3, cat4, cat5 } from "../../../assets";

const WalkingCats = () => {
  const marqueeArr = document.querySelectorAll(".marquee");
  marqueeArr.forEach((marquee) => {
    const marqueeRow = marquee.querySelector(".marquee__row");
    const marqueeItem = marqueeRow.querySelector(".marquee__item");
    const cloneNum = Number(marqueeItem?.getAttributeNode("data-clone").value);
    for (let i = 1; i < cloneNum; i++) {
      const clone = marqueeItem.cloneNode(true);
      marqueeRow.appendChild(clone);
    }
    for (let i = 0; i < 2; i++) {
      const clone = marqueeRow.cloneNode(true);
      marquee.appendChild(clone);
    }

    const marqueeMove = (dir) => {
      const rows = marquee.querySelectorAll(".marquee__row");
      const rowWidth = rows[0].getBoundingClientRect().width;
      let currentX = Number(
        getComputedStyle(marquee).getPropertyValue("--pos-x")
      );
      let newX = 0;
      switch (dir) {
        case "left":
          newX = currentX ? currentX - 1 : -rowWidth;
          newX < -2 * rowWidth && (newX = -rowWidth);
          break;
        default:
          newX = currentX ? currentX + 1 : -rowWidth;
          newX > 0 && (newX = -rowWidth);
      }
      marquee.style.setProperty("--pos-x", newX);
    };

    let speed = Number(marquee.getAttributeNode("data-speed").value);
    let direction = "left";
    let marqueeInterval = setInterval(marqueeMove, speed, direction);
    marquee.onmouseenter = () => {
      clearInterval(marqueeInterval);
    };
    marquee.onmousemove = () => {
      clearInterval(marqueeInterval);
    };
    marquee.onmouseleave = () => {
      clearInterval(marqueeInterval);
      marqueeInterval = setInterval(marqueeMove, speed, direction);
    };

    let posY = 0;
    const changeDir = () => {
      clearInterval(marqueeInterval);
      let scrollTop = document.documentElement.scrollTop;
      direction = scrollTop > posY ? "right" : "left";
      marqueeMove(direction);
      marqueeMove(direction);
      marqueeInterval = setInterval(marqueeMove, speed, direction);
      posY = scrollTop;
    };
    window.addEventListener("scroll", changeDir);
  });

  useEffect(() => {
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
  }, []);

  function updateViewportWidth() {
    document.documentElement.style.setProperty("--viewport", window.innerWidth);
  }

  return (
    <>
      <div className="marquee marquee--nezuko" data-speed="25">
        <div className="marquee__row marquee__row--nezuko">
          <div className="flex gap-2">
            <div className="grid grid-cols-3 grid-rows-3 py-20 gap-2">
              <img
                src={cat1}
                className="row-start-1 row-span-2 col-start-1 animate-float"
                alt="cat"
              />
              <img
                src={cat2}
                className="row-start-2 row-span-2 col-start-2 animate-float-2"
                alt="cat"
              />
              <img
                src={cat3}
                className="row-start-1 row-span-2 col-start-3 animate-float"
                alt="cat"
              />
              <img
                src={cat4}
                className="row-start-1 row-span-2 col-start-1 animate-float"
                alt="cat"
              />
              <img
                src={cat5}
                className="row-start-2 row-span-2 col-start-2 animate-float-2"
                alt="cat"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalkingCats;
