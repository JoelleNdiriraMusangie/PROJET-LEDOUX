import React from 'react';
import './App.css';
import Murs from './Murs'




const Game = () => {
  const gameBoardWidth = 800; // Largeur du plateau de jeu
  const gameBoardHeight = 600; // Hauteur du plateau de jeu
  
  const wallMap = [
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    
  ];


  const cellWidth = gameBoardWidth  / (wallMap[0].length);
  const cellHeight = gameBoardHeight /  ( wallMap.length);



  return (
    <div className="game">
      <div className="game-board">
        {wallMap.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell === 1 ? 'wall' : cell === 2 ? 'pac-dot' : ''}`}
                style={{ width: cellWidth, height: cellHeight }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      {/* Autres éléments du jeu, comme Pac-Man, points, etc. */}
    </div>
  );
};

export default Game;
