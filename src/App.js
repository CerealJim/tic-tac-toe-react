import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [turn, setTurn] = useState("O");
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
  const chooseSquare = (props) => {
    console.log(props);
    setTracking(
      tracking.map((val, index) => {
        if (index === props && val == "") {
          return turn;
        }
        return val;
      })
    );
    if (turn == "x") {
      setTurn("0");
    } else {
      setTurn("x");
    }
  };

  return (
    <div className="App">
      <section>
        <h1 className="playerTitle">Tic Tac Toe REACT</h1>
        <a className="rematch" href="#" target="_blank">
          Want a rematch?
        </a>
        <div className="container">
          <div
            className="item"
            onClick={() => {
              chooseSquare(0);
            }}
          >
            {tracking[0]}
          </div>
          <div
            className="item"
            onClick={() => {
              chooseSquare(1);
            }}
          >
            {tracking[1]}
          </div>
          <div
            className="item"
            onClick={() => {
              chooseSquare(2);
            }}
          >
            {tracking[2]}
          </div>
          <div
            className="item"
            onClick={() => {
              chooseSquare(3);
            }}
          >
            {tracking[3]}
          </div>
          <div
            className="item"
            onClick={() => {
              chooseSquare(4);
            }}
          >
            {tracking[4]}
          </div>
          <div
            className="item"
            onClick={() => {
              chooseSquare(5);
            }}
          >
            {tracking[5]}
          </div>
          <div
            className="item"
            onClick={() => {
              chooseSquare(6);
            }}
          >
            {tracking[6]}
          </div>
          <div
            className="item"
            onClick={() => {
              chooseSquare(7);
            }}
          >
            {tracking[7]}
          </div>
          <div
            className="item"
            onClick={() => {
              chooseSquare(8);
            }}
          >
            {tracking[8]}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
