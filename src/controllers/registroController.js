const knex = require("../database/connection");

module.exports = {
  async criarRegistro(req, res) {
    const id = req.params.id;
    const trabalhador = await knex("trabalhadores")
      .where("id", id)
      .select("*")
      .first();

    if (!trabalhador) {
      return res.status(404).json({ error: "Trabalhador não existe" });
    }

    const { descricao, data } = req.body;
    const novoRegistro = await knex("registros").insert({
      trabalhador_id: id,
      descricao,
      data,
    });

    res.json(novoRegistro);
  },

  async registros(req, res) {
    const id = req.params.id;
    const trabalhador = await knex("trabalhadores")
      .where("id", id)
      .select("*")
      .first();

    if (!trabalhador) {
      return res.status(404).json({ error: "Trabalhador não existe" });
    }

    const registros = await knex("registros")
      .where("trabalhador_id", id)
      .select("*");
    res.json(registros);
  },

  async deletarRegistro(req, res) {
    const id = req.params.id;
    const trabalhador = await knex("trabalhadores")
      .where("id", id)
      .select("*")
      .first();

    if (!trabalhador) {
      return res.status(404).json({ error: "Trabalhador não existe" });
    }

    const idRegistro = req.params.idRegistro;
    await knex("registros")
      .where("id", idRegistro)
      .where("trabalhador_id", id)
      .del();

    res.status(200).json();
  },
};
