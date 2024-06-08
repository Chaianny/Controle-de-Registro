const knex = require("../database/connection");

module.exports = {
  async trabalhadores(req, res) {
    const trabalhadores = await knex("trabalhadores").select("*");
    res.json(trabalhadores);
  },

  async trabalhador(req, res) {
    const id = req.params.id;
    const trabalhador = await knex("trabalhadores")
      .where("id", id)
      .select("*")
      .first();

    if (!trabalhador) {
      return res.status(404).json({ error: "Trabalhador não existe" });
    }

    res.json(trabalhador);
  },

  async criarTrabalhador(req, res) {
    const { nome } = req.body;
    const novoTrabalhador = await knex("trabalhadores").insert({ nome });

    res.json(novoTrabalhador);
  },
};
