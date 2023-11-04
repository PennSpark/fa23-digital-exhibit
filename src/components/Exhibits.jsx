/* eslint-disable no-restricted-globals */
import React from "react";
import Exhibit from "./Exhibit";
import useMousePosition from "../util/useMousePosition";

const Exhibits = () => {
  const exhibits = [
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      row_start: 2,
      col_start: 1,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      row_start: 1,
      col_start: 2,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 3,
      row_start: 2,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 4,
      row_start: 1,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 5,
      row_start: 2,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 1,
      row_start: 5,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 2,
      row_start: 4,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "",
      row_start: 3,
      col_start: 4,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      row_start: 2,
      col_start: 4,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 1,
      row_start: 5,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 4,
      row_start: 1,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 5,
      row_start: 2,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 1,
      row_start: 5,
    },
    {
      name: "Exhibit 1",
      description: "This is the first exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 2,
      row_start: 4,
    },
    {
      name: "Exhibit 2",
      description: "This is the second exhibit",
      image: "http://placekitten.com/200/300",
      col_start: 1,
      row_start: 5,
    },
  ];

  const mousePosition = useMousePosition();

  return (
    <div className="h-screen w-screen bg-slate-50 fixed top-0 left-0 flex, justify-center items-center">
      <div
        id="exhibit-wrapper"
        className="grid grid-rows-13 grid-cols-5 h-[125vh] w-[125vw] gap-x-4 justify-center"
        style={{
          transform: `translate(${
            (-mousePosition.x / screen.width) * screen.width * 0.25
          }px, ${(-mousePosition.y / screen.height) * screen.height * 0.25}px)`,
        }}
      >
        {exhibits.map((exhibit, index) => (
          <Exhibit
            key={exhibit.name}
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
      </div>
    </div>
  );
};

export default Exhibits;
