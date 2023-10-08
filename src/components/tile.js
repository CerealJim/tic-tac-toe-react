import { useState, useEffect } from "react";
import "../App.scss";

const Tile = (props) => {
  const divClasses = `item ${props.board[props.ind]} `;

  const updateBoard = () => {
    if (props.board[props.ind] === "") {
      //update board state
      props.updateBoard(props.ind, props.player);

      // const newPlayer = props.player === "player1" ? "player2" : "player1";
      // props.updatePlayer(newPlayer);
    }
  };

  return (
    <>
      <div
        className={divClasses}
        onClick={() => {
          updateBoard();
        }}
      ></div>
    </>
  );
};

export default Tile;
