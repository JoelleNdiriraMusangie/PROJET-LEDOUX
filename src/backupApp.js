//CODE A NE PAS COMPILER CAR NON FONCTIONNEL COMME JE LE VEUX C JUSTE UN SECOURS D FONCTIONNALITES REQUISES




import React, { useEffect, useState, useMemo,useCallback } from 'react';
import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite} from '@pixi/react'; //Graphics  à appeler {Graphics from @pixi.js}
//import { Stage, Container, Sprite,Graphics} from '@pixi/react';
import Points from './Points'; // Importez le composant Points
//import {Wall} from './components/Wall.js' ;

//import { Howl, Howler } from 'howler';


const cellSize = 50; // Taille d'une cellule de la grille
const gridSize = { width: 800, height: 600 };
//const rows = gridSize.height / cellSize;
//const cols = gridSize.width / cellSize;


  //animate contre sens x et y 
  //const animatePacMan = () => {
    // Faites bouger Pac-Man de gauche à droite en utilisant une vitesse
    ///pacMan.x += 2; // Vitesse horizontale
    //pacman.y +=2;
    // Inverser la direction lorsque Pac-Man atteint le bord droit
    //if (pacMan.x >= 800 || pacman.y >600 ) {
     // pacMan.x = -pacMan.width / 2; // Revenir à la gauche de l'écran
      //pacman.y = -pacman.height/2;
   // }
  //App.ticker.add(animatePacMan);// Ajout de la fonction d'animation à la boucle de rendu de Pixi.js



  
  export const App = () => {
    //const blurFilter = new BlurFilter(4);
    const blurFilter = useMemo(() => new BlurFilter(4), []);
    //const gridSize = { width: 800, height: 600 };
    const pacmanSize = { width: 50, height: 50 };
    const [position, setPosition] = useState({ x: 400, y: 300 });
    const [score, setScore] = useState(0);
    const [pointsEaten, setPointsEaten] = useState(0);
    const n = 5; //nbr des gommes à manger par le pacman pour avoir int increasescore = +10
  
    const increaseScore = () => {
      setPointsEaten(pointsEaten + 1);
      if (pointsEaten === n) {
        setScore(score + 10);
        setPointsEaten(0);
      }
    };
  
    const handlePointEaten = () => {
      increaseScore(); //appel lors que le pacman mange un composant Points.js
    };

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
    []
  );
//dans le crochet [gridSize.width, gridSize.height, pacmanSize.width, pacmanSize.height]

    //deplacement du pacman via les touches
    useEffect(() => {

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [handleKeyDown]);


  //notre retour de la fonction App() 
    return (
      //pour la grille ou les murs
      <Stage width={gridSize.width} height={gridSize.height}>
      
        <Container>
        {/* Pacman added */}
          <Container x={position.x} y={position.y}>
            <Sprite image="/pacman.png" anchor={0.1} scale={0.09} filters={[blurFilter]}/>
          </Container>
        </Container>
      </Stage>
    );
  };
  
  export default App;
  