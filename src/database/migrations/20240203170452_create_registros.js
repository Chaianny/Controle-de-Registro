/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("registros", function (table) {
    table.increments("id");
    table.string("descricao");
    table.timestamp("data", { precision: 6 });

    table.integer("trabalhador_id").notNullable;
    table.foreign("trabalhador_id").references("id").inTable("trabalhadores");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("registros");
};
