import React from "react";

const WinnerModal = ({ winner, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Winner</h2>
        <p>{winner} wins!</p>
        <button onClick={onClose}>Restart</button>
      </div>
    </div>
  );
};

export default WinnerModal;
