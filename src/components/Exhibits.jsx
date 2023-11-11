/* eslint-disable no-restricted-globals */
import React from "react";
import Exhibit from "./Exhibit";
import useMousePosition from "../util/useMousePosition";
import { useDrag } from "@use-gesture/react";
import { useSpring } from "@react-spring/web";
import { animated } from "@react-spring/web";

const Exhibits = () => {
  const exhibits = [
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      row_start: 2,
      col_start: 1,
      type: 1,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      row_start: 1,
      col_start: 2,
      type: 1,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 3,
      row_start: 2,
      type: 2,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 4,
      row_start: 1,
      type: 1,
    },
    {
      name: "test",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 5,
      row_start: 2,
      type: 1,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 1,
      row_start: 5,
      type: 1,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 2,
      row_start: 4,
      type: 2,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "",
      row_start: 3,
      col_start: 4,
      type: 2,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      row_start: 2,
      col_start: 4,
      type: 1,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 1,
      row_start: 5,
      type: 1,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 4,
      row_start: 1,
      type: 2,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 5,
      row_start: 2,
      type: 1,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 1,
      row_start: 5,
      type: 2,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 2,
      row_start: 4,
      type: 1,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 1,
      row_start: 5,
      type: 2,
    },
  ];

  const mousePosition = useMousePosition();

  const [{ x, y }, api] = useSpring(() => ({
    x: -screen.width * 0.125,
    y: screen.height * 0.0625,
    config: {
      clamp: true,
    },
  }));

  const [{ scale, scaleLess }, scaleApi] = useSpring(() => ({
    scale: 1,
    scaleLess: 1,
  }));
  const [{ smallX, smallY, smallX2, smallY2 }, smallApi] = useSpring(() => ({
    smallX: 0,
    smallY: 0,
    smallX2: 0,
    smallY2: 0,
  }));

  const [mouseDown, setMouseDown] = React.useState(false);

  const bind = useDrag(
    ({
      down,
      offset: [dx, dy],
      velocity: [vx, vy],
      direction: [dirX, dirY],
    }) => {
      if (down) {
        scaleApi.start({
          scale: 0.85,
          scaleLess: 0.9,
        });
        if (!mouseDown) setMouseDown(true);
      } else {
        scaleApi.start({
          scale: 1,
          scaleLess: 1,
        });
        if (mouseDown) setMouseDown(false);
      }
      smallApi.start({
        smallX: vx * 10 * dirX,
        smallY: vy * 10 * dirY,
        smallX2: vx * -10 * dirX,
        smallY2: vy * -10 * dirY,
      });
      console.log(vx * dirX, vy * dirY);

      api.start({
        x: dx + -screen.width * 0.125,
        y: dy + screen.height * 0.0625,
      });
    },
    {
      bounds: {
        left: -screen.width * 0.125,
        top: -screen.height * 0.25,
        right: screen.width * 0.125,
        bottom: 0,
      },
      rubberband: true,
    }
  );

  return (
    <div
      {...bind()}
      className="h-screen w-screen bg-slate-50 fixed top-0 left-0 flex, justify-center items-center"
      style={{ touchAction: "none", cursor: mouseDown ? "grabbing" : "grab" }}
    >
      <animated.div
        className="fixed w-screen h-screen z-20"
        // style={{
        //   background:
        //     "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,62,97,0) 40%, rgba(0,62,97,0) 60%, rgba(255,255,255,1) 100%)",
        // }}
      ></animated.div>
      <animated.div
        id="exhibit-wrapper"
        className="grid grid-rows-13 grid-cols-5 h-[125vh] w-[125vw] gap-x-4 justify-center"
        style={{
          x,
          y,
        }}
      >
        {exhibits.map((exhibit, index) => (
          <Exhibit
            style={
              exhibit.type === 1
                ? { scale, x: smallX, y: smallY }
                : { scale: scaleLess, x: smallX2, y: smallY2 }
            }
            key={index}
            name={exhibit.name}
            description={exhibit.description}
            image={exhibit.image}
            row_start={
              Math.floor(index / 5) * 4 +
              (Math.floor(index / 5) % 2 === 0 ? index % 2 : (index + 1) % 2)
            }
            col_start={(index % 5) + 1}
          />
        ))}
      </animated.div>
    </div>
  );
};

export default Exhibits;
