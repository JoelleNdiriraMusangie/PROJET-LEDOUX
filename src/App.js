import React, { useEffect, useState, useRef } from 'react';
import {  Container,Sprite, Text} from 'pixi.js';// Importation des modules nécessaires de Pixi.js
import { BlurFilter } from 'pixi.js';
import * as PIXI from 'pixi.js';//Importation de Pixi.js
import { useMemo } from 'react';// Importation de useMemo pour optimiser les performances
import "./index.css";
//import { Application } from 'pixi.js';
//import { Stage} from '@pixi/react';




export const App = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), []);//Création d'un filtre de flou avec useMemo
  const pixiContainerRef = useRef(null);// Référence au conteneur Pixi
  const [position, setPosition] = useState({ x: 400, y: 300 });// État pour gérer la position de Pac-Man
 // const [score,setScore] = useState(0);
  //const [gameOver, setGameOver] = useState(false);  

  useEffect(() => {
    // Effet useEffect pour créer le jeu lors du montage du composant
    const app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0x000000,
    });

    // Création du mur statique (un rectangle)
    const wall = new PIXI.Graphics();
    wall.beginFill(0x00FF00); // Couleur du mur (vert)
    wall.drawRect(100, 200, 600, 800); // Rectangle aux coordonnées (100, 200) de largeur 600 et hauteur 800
    wall.endFill();

    const pixiContainer = pixiContainerRef.current.appendChild(app.view);

    if (pixiContainer) {
      pixiContainer.appendChild(app.view);
      const blurFilter = new BlurFilter(4);

      const pacman = Sprite.from('pacman.png');
      pacman.x = 400;
      pacman.y = 300;
      pacman.anchor.set(0.5);// Définition du point d'ancrage au centre du sprite (pour une rotation correcte)
      pacman.filters = [blurFilter]; // Appliquez le filtre à votre sprite


      app.stage.addChild(pacman);
// Fonction pour animer Pac-Man (déplacement horizontal de gauche à droite)
      const animatePacMan = () => {
        // Faites bouger Pac-Man de gauche à droite en utilisant une vitesse
        pacman.x += 2; // Vitesse horizontale
        // Inverser la direction lorsque Pac-Man atteint le bord droit
        if (pacman.x >= 800) {
          pacman.x = -pacman.width / 2; // Revenir à la gauche de l'écran
        }
        pacman.y +=2;
        if(pacman.y >600){
          pacman.y = -pacman.height/2;
        }
      };
      app.ticker.add(animatePacMan);// Ajout de la fonction d'animation à la boucle de rendu de Pixi.js
  
// Gestion des événements de clavier pour déplacer Pac-Man
         //if (!gameOver){
      const handleKeyDown = (e) => {
        switch (e.key) {
          case 'ArrowLeft':
            setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - 10 }));
            break;
          case 'ArrowRight':
            setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + 10 }));
            break;
          case 'ArrowUp':
            setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y - 10 }));
            break;
          case 'ArrowDown':
            setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y + 10 }));
            break;
          default:
            break;
        }
      };
      //}
      

      window.addEventListener('keydown', handleKeyDown);// Écoute des événements de clavier


      // Fonction de nettoyage lors du démontage du composant
      return () => {
        window.removeEventListener('keydown', handleKeyDown);//Suppression de l'écouteur d'événements
        app.destroy();// Nettoyage de l'application Pixi.js
      };
    }
  }, []);//Le tableau vide [] signifie que cet effet s'exécute une seule fois lors du montage du composant

  
  return (
    
      <Container x={position.x} y={position.y}>
        <Sprite
          image="pacman.png"
          anchor={0.5}
          scale={0.1}
          ref={pixiContainerRef} // Liaison de la référence Pixi.js au conteneur
        />
         <Text text=" " anchor={{ x: 0.5, y: 0.5 }} filters={[blurFilter]} />
      </Container>
    
  );
};

export default App;
