import React, { useState } from 'react';
import { Text } from '@pixi/react';
import * as PIXI from 'pixi.js';



const Points = ({ onPointEaten }) => {
  // Score initial
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 10);
    onPointEaten(); // Appelez la fonction onPointEaten pour gérer la collision avec le point
  };
  //increaseScore(); // à rappeler au moment opportun pour ne pas boucler  Faire une boucle while pour ne pas boucler
  return (
    
      <Text
        text={`Points: ${score}`}
        x={10}
        y={10}
        style={new PIXI.TextStyle({ fill: 0xffffff, fontSize: 24 })}
      />
    
  );
};

export default Points;