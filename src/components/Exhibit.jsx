import React from "react";

const Exhibit = ({ name, description, image, col_start, row_start }) => {
  return (
    <div
      style={{
        gridColumnStart: col_start,
        gridColumnEnd: col_start + 1,
        gridRowStart: row_start,
        gridRowEnd: row_start + 3,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      className="flex justify-center items-center"
    >
      {/* <h1>{name}</h1>
      <p>{description}</p> */}
      {image !== "" && (
        <img src={image} alt={name} style={{ objectFit: "cover" }} />
      )}
    </div>
  );
};

export default Exhibit;
