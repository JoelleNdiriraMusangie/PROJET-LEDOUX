import React from 'react';
//import GameBoard from './GameBoard';

const wallMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 2, 0, 0, 0],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
  ];
  

const gameBoardWidth = 800; // Largeur du plateau de jeu
const gameBoardHeight = 600; // Hauteur du plateau de jeu

const cellWidth = gameBoardWidth / wallMap[0].length;
const cellHeight = gameBoardHeight / wallMap.length;



const Murs = ({ wallMap , cellWitdh, cellHeight}) => {
  return (
    <div className="murs">
      
      {wallMap.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div key={colIndex}
            className={`cell ${cell === 1 ? 'wall' : ''}`}
            style={{ width: cellWidth, height: cellHeight }}
            ></div>
          ))}
        </div>
      ))}

      
    </div>
  );
};

export default Murs;
