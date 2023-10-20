import React from 'react';
import "./App.css"


const Pacman = ({ x, y }) => {
  return (
    <div className="pacman" style={{ left: x, top: y }}>
      {/* Image de Pac-Man */}
      <img src="pacman.png" alt="Pac-Man" />
    </div>
  );
};

export default Pacman;
