/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef } from "react";
import { animated } from "@react-spring/web";

const Exhibit = ({ name, description, image, col_start, row_start, style }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref) return;

    const posX = ref.current.offsetLeft;
    const posY = ref.current.offsetTop;

    const width = (screen.width * 1.25) / 2;
    const height = (screen.height * 1.25) / 2;
    if (name === "test") {
      console.log(posX, posY, width, height);
      console.log(`${posX - width}px ${height - posY}px`);
    }
    ref.current.style.transformOrigin = `${(-posX + width) * 1.2}px ${
      (-posY + height) * 1.2
    }px`;
  }, []);
  return (
    <animated.div
      ref={ref}
      style={{
        gridColumnStart: col_start,
        gridColumnEnd: col_start + 1,
        gridRowStart: row_start,
        gridRowEnd: row_start + 3,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        userSelect: "none",
        pointerEvents: "none",
        ...style,
      }}
      className="flex justify-center items-center"
    >
      {/* <h1>{name}</h1>
      <p>{description}</p> */}
      {image !== "" && (
        <img
          src={image}
          alt={name}
          style={{ objectFit: "cover", userSelect: "none" }}
        />
      )}
    </animated.div>
  );
};

export default Exhibit;
