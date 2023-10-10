import { useState, useEffect } from "react";
import Tile from "./components/tile";
import "./App.scss";
import WinnerModal from "./components/WinnerModal";

function App() {
  let [tracking, setTracking] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState("player1");
  const [gameStatus, setGameStatus] = useState(false); //true means that there is a winner
  const [showModal, setShowModal] = useState(false);

  const winCheck = () => {
    function check(pos1, pos2, pos3) {
      if (
        tracking[pos1] === currentPlayer &&
        tracking[pos2] === currentPlayer &&
        tracking[pos3] === currentPlayer
      ) {
        return true; // Return true when there's a win condition
      }
      {
        return false; // Return false otherwise
      }
    }
    if (
      check(0, 3, 6) ||
      check(1, 4, 7) ||
      check(2, 5, 8) ||
      check(0, 1, 2) ||
      check(3, 4, 5) ||
      check(6, 7, 8) ||
      check(0, 4, 8) ||
      check(2, 4, 6)
    ) {
      return true; // Set gameStatus to true when there's a win
    }

    return false; // Return false if there's no win condition
  };

  const togglePlayerTurn = (newPlayer) => {
    setCurrentPlayer(newPlayer);
  };

  const updateBoard = (numPick, playerPick) => {
    const newBoard = [...tracking]; //spread operator to copy array
    newBoard[numPick] = playerPick;
    setTracking(newBoard);
  };

  const restartGame = () => {
    setTracking(["", "", "", "", "", "", "", "", ""]);
    setGameStatus(false);
    setCurrentPlayer("player1");
    setShowModal(false);
  };

  const handleGameEnd = (player) => {
    setGameStatus(true);
    setShowModal(true);
  };

  useEffect(() => {
    if (winCheck() === false) {
      const newPlayer = currentPlayer === "player1" ? "player2" : "player1";
      togglePlayerTurn(newPlayer);
    } else {
      handleGameEnd();
    }
  }, [tracking]);

  return (
    <div className="app">
      <h1 className="playerTitle">Tic Tac Toe REACT</h1>
      <section>
        <button
          className="rematch"
          href="#"
          target="_blank"
          onClick={() => {
            console.log("click");
            restartGame();
          }}
        >
          Want a rematch?
        </button>
        <div className="container">
          {tracking.map((el, index) => {
            return (
              <Tile
                ind={index}
                key={index}
                board={tracking}
                updateBoard={updateBoard}
                player={currentPlayer}
                updatePlayer={togglePlayerTurn}
              />
            );
          })}
          {showModal === true ? (
            <WinnerModal
              winner={currentPlayer}
              onClose={() => {
                setShowModal(false);
                restartGame();
              }}
            />
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
