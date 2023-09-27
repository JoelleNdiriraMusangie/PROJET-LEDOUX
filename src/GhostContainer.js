//Comlposant GhostContainer pour gérer la logique des fantômes et la detection des collisions avec Pac-Man

import React, { Component } from 'react';
import Ghost from './Ghost';

class GhostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollision: false,
    };
  }

  componentDidMount() {
    // Ajout ici de la logique pour détecter la collision avec Pac-Man.
    // Par exemple, on utilise setInterval() pour vérifier périodiquement la position de Pac-Man et des fantômes.
    // Si une collision est détectée, on appele la fonction this.handleCollision().
    this.collisionCheckInterval = setInterval(this.handleCollision, 1000); // Vérifiez toutes les 1 seconde.
  }

  handleCollision() {
    // Gérez la collision ici, par exemple, en jouant un son.
    const collisionSound = new Audio('https://freesound.org/people/strangehorizon/sounds/703739/');
    collisionSound.play();

    // Mettez à jour l'état pour afficher un message de fin de jeu ou effectuer d'autres actions nécessaires.
    this.setState({ isCollision: true });
  }

  render() {
    return (
      <div className="ghost-container">
        {this.state.isCollision ? (
          <p>Game Over</p>
        ) : (
          <Ghost />
          
        )}
        
      </div>
    );
  }
  componentWillUnmount(){
    clearInterval(this.collisionCheckInterval);//on vide ou efface l'interval lorsque le composant est demonté
  }

}

export default GhostContainer;
