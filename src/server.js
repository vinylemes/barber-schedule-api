const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
  res.send('Bem-vindo à API REST com Express! Vanessa!');
});

// Rota de exemplo
app.get('/api/user', (req, res) => {
  res.json({ name: 'Vanessa',
             age: 18,
             city: 'São Paulo'
   });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
