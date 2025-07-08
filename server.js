const express = require('express');

const server = express();
server.use(express.json());

const users = [];

server.post('/api', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Faltan campos' });
  }
  users.push({ name, age });
  res.status(201).json({ message: 'Usuario agregado', user: { name, age } });
});

server.get('/api', (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

