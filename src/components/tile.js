import { useState, useEffect } from "react";
import "../App.scss";

const Tile = (props) => {
  return (
    <>
      <div
        className="item"
        onClick={() => {
          console.log("click", props.value, props.index);
        }}
      >
        {props.value}
      </div>
    </>
  );
};

export default Tile;
