import React, { useEffect, useState, useCallback } from 'react';
import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text, Graphics } from '@pixi/react';
import { useMemo } from 'react';
//import {Wall} from './components/Wall.js' ;
import { Howl, Howler } from 'howler';


//import { Stage, Container, Graphics } from '@inlet/react-pixi';

//rectangle = obstacle a supp

/*function Rectangle(props) {
  const draw = useCallback(
    (g) => {
      g.clear();
      g.beginFill(props.color);
      g.drawRect(props.x, props.y, props.width, props.height);
      g.endFill();
    },
    [props],
  );
  return <Graphics draw={draw} />;
} */

// Fonction pour dessiner la grille
const Grille = (g) => {
  g.lineStyle(1, 0x0000FF, 0.5); // Épaisseur de ligne, couleur (en hexadécimal), opacité
  const gridSize = 50; // Taille des cellules de la grille

  // Dessinez les lignes verticales
  for (let x = 0; x <= 800; x += gridSize) {
    g.moveTo(x, 0);
    g.lineTo(x, 600);
  }

  // Dessinez les lignes horizontales
  for (let y = 0; y <= 600; y += gridSize) {
    g.moveTo(0, y);
    g.lineTo(800, y);
  }
};


//installation du son 



// Initialisez Howler
//Howler.autoUnlock = true; // Débloquez automatiquement le son sur les appareils mobiles
//if(handleKeyDown){
// Chargez un fichier audio
//const sound = new Howl({
 // src: ['/src/audio/opening_song.mp3'], // Spécifiez le chemin du fichier audio
  //volume: 0.5, // Réglez le volume (0 à 1)
  //loop: true, // Activez la lecture en boucle si nécessaire
//});

// Jouez le son
//sound.play();} 
//else{

// Pour arrêter le son
// sound.stop();
//}



//Mon App.js
export const App = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), []);
  const gridSize = { width: 800, height: 600 }; // Taille de la grille
  const pacmanSize = { width: 50, height: 50 }; // Taille du PACMAN
  const [position, setPosition] = useState({ x: 400, y: 300 }); // Position initiale

  // Direction du mouvement automatique (0: immobile, 1: gauche, 2: droite, 3: haut, 4: bas)
  const [autoMoveDirection, setAutoMoveDirection] = useState(0);

  useEffect(() => {
    // Fonction pour gérer le mouvement automatique aléatoire
    const handleAutoMove = () => {
      const randomDirection = Math.floor(Math.random() * 5); // 0 à 4 (5 directions possibles)

      // Évitez de choisir la direction opposée à la direction actuelle
      if (randomDirection === 1 && autoMoveDirection === 2) return;
      if (randomDirection === 2 && autoMoveDirection === 1) return;
      if (randomDirection === 3 && autoMoveDirection === 4) return;
      if (randomDirection === 4 && autoMoveDirection === 3) return;

      setAutoMoveDirection(randomDirection);
    };

    // Démarrez le mouvement automatique toutes les 500 millisecondes (0.5 seconde)
    const autoMoveInterval = setInterval(handleAutoMove, 400);

    return () => {
      clearInterval(autoMoveInterval); // Arrêtez le mouvement automatique lorsque le composant est démonté
    };
  }, [autoMoveDirection]);

  // Fonction pour gérer le mouvement dirigé par les touches
  const handleKeyDown = useCallback(
    (e) => {
      // Déplacez le personnage en réponse aux touches fléchées
      switch (e.key) {
        case 'ArrowLeft':
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: Math.max(prevPosition.x - 20, 0), // Limite gauche
          }));
          setAutoMoveDirection(0); // Arrête le mouvement automatique
          break;
        case 'ArrowRight':
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: Math.min(prevPosition.x + 20, gridSize.width - pacmanSize.width), // Limite droite
          }));
          setAutoMoveDirection(0); // Arrête le mouvement automatique
          break;
        case 'ArrowUp':
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: Math.max(prevPosition.y - 20, 0), // Limite supérieure
          }));
          setAutoMoveDirection(0); // Arrête le mouvement automatique
          break;
        case 'ArrowDown':
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: Math.min(prevPosition.y + 20, gridSize.height - pacmanSize.height), // Limite inférieure
          }));
          setAutoMoveDirection(0); // Arrête le mouvement automatique
          break;
        default:
          break;
      }
    },
    [gridSize.width, gridSize.height, pacmanSize.width, pacmanSize.height]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Fonction pour gérer le mouvement automatique
  useEffect(() => {
    const handleAutoMove = () => {
      switch (autoMoveDirection) {
        case 1:
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: Math.max(prevPosition.x - 20, 0), // Limite gauche
          }));
          break;
        case 2:
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: Math.min(prevPosition.x + 20, gridSize.width - pacmanSize.width), // Limite droite
          }));
          break;
        case 3:
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: Math.max(prevPosition.y - 20, 0), // Limite supérieure
          }));
          break;
        case 4:
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: Math.min(prevPosition.y + 20, gridSize.height - pacmanSize.height), // Limite inférieure
          }));
          break;
        default:
          break;
      }
    };

    // Démarrez le mouvement automatique toutes les 250 millisecondes (0.25 seconde)
    const autoMoveInterval = setInterval(handleAutoMove, 110);

    return () => {
      clearInterval(autoMoveInterval); // Arrêtez le mouvement automatique lorsque le composant est démonté
    };
  }, [autoMoveDirection, gridSize.width, gridSize.height, pacmanSize.width, pacmanSize.height]);

  return (
    <Stage width={gridSize.width} height={gridSize.height}>

      
      
      <Container>
       
        
        {/* Ajoutez le PACMAN */}
        <Container x={position.x} y={position.y}>
          <Sprite image="/pacman.png" anchor={0.1} scale={0.09} />
          <Text text=" " anchor={{ x: 0.5, y: 0.5 }} filters={[blurFilter]} />
          
        </Container>
        <Graphics draw={Grille} />
      </Container>
      
    </Stage>
  );
};

export default App;