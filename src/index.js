const express = require("express");
const trabalhadorController = require("./controllers/trabalhadorController");
const registroController = require("./controllers/registroController");

const app = express();
const port = 3000;

app.use(express.json());

// GET /trabalhadores - lista todos trabalhadores
// POST /trabalhadores - cria trabalhador
// GET /trabalhador/{id} - perfil trabalhador
// GET /trabalhador/{id}/excel - relatorio excel
// POST /trabalhador/{id}/registro - criar registro

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/trabalhadores", trabalhadorController.trabalhadores);
app.post("/trabalhadores", trabalhadorController.criarTrabalhador);
app.get("/trabalhadores/:id", trabalhadorController.trabalhador);
app.get("/trabalhadores/:id/registros", registroController.registros);
app.post("/trabalhadores/:id/registros", registroController.criarRegistro);
app.delete("/trabalhadores/:id/registros/:idRegistro", registroController.deletarRegistro);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
