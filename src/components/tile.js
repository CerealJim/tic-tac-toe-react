import { useState, useEffect } from "react";
import "../App.scss";

// const chooseSquare = (props) => {
//   console.log(props);
//   setTracking(
//     tracking.map((val, index) => {
//       if (index === props && val == "") {
//         return turn;
//       }
//       return val;
//     })
//   );
//   if (turn == "x") {
//     setTurn("0");
//   } else {
//     setTurn("x");
//   }
// };

const Tile = (props) => {
  const divClasses = `item ${props.board[props.ind]} `;

  const updateBoard = () => {
    if (props.board[props.ind] === "") {
      props.updateBoard(props.ind, props.player);
    }
  };

  const togglePlayerTurn = () => {
    const newPlayer = props.player === "player1" ? "player2" : "player1";
    props.updatePlayer(newPlayer);
  };

  return (
    <>
      <div
        className={divClasses}
        onClick={() => {
          console.log("click", props, props.ind);
          updateBoard();
          togglePlayerTurn();
        }}
      >
        {props.value}
      </div>
    </>
  );
};

export default Tile;
