
import React from 'react';
import './App.css';
//import Game from './CompoGame';


class App extends React.Component {
    render() {
        const gridSize = 10; // Taille de la grille  10 
        const cellSize = 70; // Taille d'une cellule en pixels  40
        const cells = [];

        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const cellStyle = {
                    width: cellSize + 'px',
                    height: cellSize + 'px',
                    backgroundColor: 'blue', // Couleur de fond des cellules bleue
                    border: '1px solid white', // Bordure blanche autour des cellules
                };

                cells.push( < div key = { `cell-${row}-${col}` }
                    style = { cellStyle } > </div>
                );
            }
        }

        return ( <div className = "App" >

            <h1> Pac - Man Game </h1>  < div className = "grid" > { cells } </div>
            </div >
        );
    }

    
}

export default App;



//import './App.css';
//import Stage from "@inlet/react-pixi"
//import * as PIXI from 'pixi.js';

//import React from 'react';

/*function App() {
  return (

    <stage>
    <div className="App">
      <header className="App-header">
          <h1> WELCOME TO THE PACMAN GAME  
            <img class= "pacman" src="./Images/pacman.jpg" alt="" width="50" height="50"></img>
          </h1>
      
      </header>
    </div>
    </stage>
  );
}



export default App;

*/