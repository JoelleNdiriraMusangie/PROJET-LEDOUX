//le composant game qui gère la logique du eu pacman
import React, { Component } from 'react';
import PacMan from './PacMan';
import GhostContainer from './GhostContainer';



class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  handleEatFood = () => {
    // Incrément du score lorsque Pac-Man mange de la nourriture.
    this.setState((prevState) => ({
      score: prevState.score + 10,
    }));

    // Envoi du score au serveur ici (Partie à implémenter).
    this.sendScoreToServer(this.state.score + 10);
  };

  sendScoreToServer = (score) => {
    // on pouvait utiliser des requêtes AJAX, Fetch ou Axios pour envoyer le score au serveur.
    // Exemple avec Fetch :
    fetch('https://www.google.fr/logos/2010/pacman10-i.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //données envoyées au serveur de type JSON
      },
      body: JSON.stringify({ score }),
    })
      .then((response) => response.json())
      .then((data) => {

        // Gérez la réponse du serveur si nécessaire.


      })
      .catch((error) => {

        // Gérez les erreurs de communication avec le serveur.


      });
  };

  render() {
    return (
      <div className="game" >  
        <h1>Score: {this.state.score}</h1>
        <PacMan onEatFood={this.handleEatFood} />
        {/* Ajoutez d'autres éléments du jeu ici, comme la nourriture et les fantômes */}
      </div>
    );
  }
}

export default Game;
