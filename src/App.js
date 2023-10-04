import { useState, useEffect } from "react";
import Tile from "./components/tile";
import "./App.scss";

function App() {
  // const [turn, setTurn] = useState("O");
  const [tracking, setTracking] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  // useEffect(() => {
  //   console.log("test");
  // }, [tracking]);

  // const winCheck = (playerName, items) => {
  //   function check(pos1, pos2, pos3) {
  //     if (
  //       items[pos1].classList.contains(playerName) &
  //       items[pos2].classList.contains(playerName) &
  //       items[pos3].classList.contains(playerName)
  //     ) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  //   if (check(0, 3, 6)) return true;
  //   else if (check(1, 4, 7)) return true;
  //   else if (check(2, 5, 8)) return true;
  //   else if (check(0, 1, 2)) return true;
  //   else if (check(3, 4, 5)) return true;
  //   else if (check(6, 7, 8)) return true;
  //   else if (check(0, 4, 8)) return true;
  //   else if (check(2, 4, 6)) return true;
  // };

  // const restartGame = () => {
  //   setTracking(["", "", "", "", "", "", "", "", ""]);
  //   setPlayer("O");
  // };

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

  return (
    <div className="app">
      <h1 className="playerTitle">Tic Tac Toe REACT</h1>
      <section>
        <a className="rematch" href="#" target="_blank">
          Want a rematch?
        </a>
        <div className="container">
          {tracking.map((val, index) => {
            return <Tile value={val} ind={index} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
