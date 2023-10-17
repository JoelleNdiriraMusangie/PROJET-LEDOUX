import React, { useEffect ,useState} from 'react';
import * as PIXI from 'pixi.js';


export const Labyrinthe = () => {
  const [ghost1, setGhost1] = useState({ x: 2, y: 2 }); // Position initiale du fantôme 1
  const [ghost2, setGhost2] = useState({ x: 3, y: 3 }); 
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
    const app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1099bb,
    });
    // Définissez la carte du labyrinthe sous forme de matrice
    const labyrintheMap = [
        [1, 1, 1, 1, 1], // 1 représente un mur
        [1, 0, 0, 0, 1], // 0 représente un espace vide
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
      ];

      document.getElementById('labyrinthe-container').appendChild(app.view);

    // Taille des cellules
    const cellSize = 50;

    // Parcours de la matrice et création des éléments du labyrinthe
    for (let row = 0; row < labyrintheMap.length; row++) {
      for (let col = 0; col < labyrintheMap[row].length; col++) {
        const cellValue = labyrintheMap[row][col];

        if (cellValue === 1) {
          // Mur
          const wall = new PIXI.Graphics();
          wall.beginFill(0x0000FF); // Couleur bleue
          wall.drawRect(col * cellSize, row * cellSize, cellSize, cellSize);
          wall.endFill();
          app.stage.addChild(wall);
        } else {
          // Espace vide
          const emptySpace = new PIXI.Graphics();
          emptySpace.beginFill(0xFFFFFF); // Couleur blanche
          emptySpace.drawRect(col * cellSize, row * cellSize, cellSize, cellSize);
          emptySpace.endFill();
          app.stage.addChild(emptySpace);
        }
      }
    }


    const moveGhost = (ghost, setGhost) => {
        const directions = [
          { x: 0, y: -1 }, // Déplacement vers le haut
          { x: 0, y: 1 },  // Déplacement vers le bas
          { x: -1, y: 0 }, // Déplacement vers la gauche
          { x: 1, y: 0 },  // Déplacement vers la droite
        ];
  
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
  
        const newX = ghost.x + randomDirection.x;
        const newY = ghost.y + randomDirection.y;
  
        // Vérifiez que le nouveau déplacement reste sur la piste
        if (
          newX >= 0 &&
          newX < labyrintheMap[0].length &&
          newY >= 0 &&
          newY < labyrintheMap.length &&
        labyrintheMap[newY][newX] === 0
      ) {
        setGhost({ x: newX, y: newY });
      }
    };

    const updateGhosts = () => {
      moveGhost(ghost1, setGhost1);
      moveGhost(ghost2, setGhost2);
    };

    // Mettez à jour la position des fantômes à intervalles réguliers
    const ghostUpdateInterval = setInterval(updateGhosts, 1000); // Mettez à jour toutes les secondes

   

    return () => {
      app.destroy();
    };
    });
  }, []);

  return <div id="labyrinthe-container"></div>;
};

export default Labyrinthe;
