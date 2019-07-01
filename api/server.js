const express = require('express');
const server = express();

const db = [];

server.use(express.json());

server.get('/games', async (req, res) => {
  await res.status(200).json(db);
});

server.post('/games', (req, res) => {
  const game = {
    title: req.body.title,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear
  };
  if (!req.body.title || !req.body.genre) {
    res.status(422).json({ message: 'Please provide game title and genre' });
  } else {
    res.status(201).json(game);
  }
});

module.exports = server;