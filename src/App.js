import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard'
import Pacman from './pacman';
import "./App.css"



const PacmanGame = () => {
  const [pacmanPosition, setPacmanPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [dots, setDots] = useState([]); // Tableau pour stocker les positions des points

  // Fonction pour gérer le déplacement du Pac-Man
  const movePacman = (direction) => {
    // Mettez en œuvre la logique de déplacement du Pac-Man ici
    // Mettez à jour la position de Pac-Man et vérifiez les collisions avec les points
  };

  // Gérez la logique du jeu, les collisions, la gestion des points, etc.
  useEffect(() => {
    // Mettez en œuvre la logique du jeu ici
  }, [pacmanPosition, dots, score]);

  return (
    <div>
      <h1>Pac-Man Game</h1>
      <div>Score: {score}</div>
        {/* Affichage du plateau de jeu ici */}
        <GameBoard/>
        <Pacman x={pacmanPosition.x} y={pacmanPosition.y} />
        {/* Utilisez des composants React pour les murs, Pac-Man, les points, etc. */}
      
    </div>
  );
};

export default PacmanGame;