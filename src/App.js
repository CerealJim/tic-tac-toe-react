
import { useState, useEffect } from 'react';
import './App.css';



function App() {

  const [tracking, settracking] = useState([]);


  return (
    <div className="App">
      <section>
        <h1 className="playerTitle">Tic Tac Toe REACT</h1>
        <a
          className="rematch"
          href="#"
          target="_blank"
        >
          Want a rematch?
        </a>
        <div className="container">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
