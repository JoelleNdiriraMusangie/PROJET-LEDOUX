import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';

const PixiComponent = () => {
  const pixiContainer = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0xAAAAAA, // Couleur de fond
    });

    // Création du mur statique (un rectangle)
    const wall = new PIXI.Graphics();
    wall.beginFill(0x00FF00); // Couleur du mur (vert)
    wall.drawRect(100, 200, 200, 20); // Rectangle aux coordonnées (100, 200) de largeur 200 et hauteur 20
    wall.endFill();

    // Ajout du mur à la scène
    app.stage.addChild(wall);

    // Ajout de la scène Pixi à la div
    pixiContainer.current.appendChild(app.view);
  }, []);

  return <div ref={pixiContainer}></div>;
};

export default PixiComponent;
