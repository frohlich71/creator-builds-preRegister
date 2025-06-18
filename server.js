// server.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname)); // Serve arquivos estáticos

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});