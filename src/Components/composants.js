import React from 'react';
import React, {useState, useEffect} from 'react';
//création des composants : 


//états initiaux des différents composants pacman et les ghosts
const [pacmanX, setPacmanX] = useState(1);
const [pacmanY, setPacmanY] = useState(1);
const [ghostX, setGhostX] = useState(8);
const [ghostY, setGhostY] = useState(6);

class PacMan extends React.Component {
  render() {
      const pacManStyle = {
          width: '40px', // Taille de Pac-Man
          height: '40px',
          backgroundColor: 'yellow', // Couleur de Pac-Man
          borderRadius: '50%', // Pour donner à Pac-Man une forme circulaire
          position: 'absolute',
          // Ajoutez des propriétés de positionnement en fonction de la logique du jeu
      };

      return (
          <div className="pac-man" style={pacManStyle}>
            <img src={require('./Image/pacman.png')} alt="Pacman" />
              {/* Contenu de Pac-Man */}
              <div className="mouth"></div>
              
          </div>
          
      );
  }
}

export default PacMan;

//composant Ghost

class Ghost extends React.Component {
  render() {
      const ghostStyle = {
          width: '40px', // Taille des fantômes
          height: '40px',
          backgroundColor: 'red', // Couleur des fantômes
          borderRadius: '50%', // Pour donner une forme circulaire aux fantômes
          position: 'absolute',
          // Ajoutez des propriétés de positionnement en fonction de la logique du jeu
      };

      return (
          <div className="ghost" style={ghostStyle}>
            <img src={require('./Image/pacmanBlueu.png')} alt="Fantôme Bleu" />
              {/* Contenu du fantôme */}
          </div>
      );
  }
}

export default Ghost;

//Composant Ghost

class Ghost extends React.Component {
  render() {
      const ghostStyle = {
          width: '40px', // Taille des fantômes
          height: '40px',
          backgroundColor: 'red', // Couleur des fantômes
          borderRadius: '50%', // Pour donner une forme circulaire aux fantômes
          position: 'absolute',
          // Ajoutez des propriétés de positionnement en fonction de la logique du jeu
      };

      return (
          <div className="ghost" style={ghostStyle}>
            <img src={require('./Image/pacmanRed.png')} alt="Fantôme Rouge" />
              {/* Contenu du fantôme */}
          </div>
      );
  }
}

export default Ghost;