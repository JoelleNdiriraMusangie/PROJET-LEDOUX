//import App from './App';

const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const App = express();
const port = 3000; // Port sur lequel notre serveur écoutera

// Utilisation de bodyParser pour analyser les données JSON dans les requêtes POST(MiddleWare)
App.use(bodyParser.json());

//XConnexion à la base de données SQLITE3

const db = new sqlite3.Database('score.db');

//Création d'une table 'score' pour le storage car elle n'existe pas avant
db.run(`
  CREATE TABLE IF NOT EXISTS scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    score INTEGER
  )
`);
// Endpoint pour enregistrer le score
App.post('/api/enregistrement-score', (req, res) => {
  const { score } = req.body;

  // ajout ici de la logique pour enregistrer le score dans votre base de données
  // ou effectuer d'autres actions nécessaires.

  console.log(`Score enregistré : ${score}`);
  res.json({ message: 'Score enregistré avec succès' });
});

//pour le get et le put voir s'il faut à nouveau créer une db pour ces 3 verbes!
  

App.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});

//Add get and post méthod
//node server.js dans le terminal pour executer mon serveur

