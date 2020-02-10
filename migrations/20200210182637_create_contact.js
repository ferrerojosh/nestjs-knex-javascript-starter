exports.up = function(knex) {
  return knex.schema.createTable('contact', table => {
    table.uuid('id');
    table.string('firstName');
    table.string('middleName');
    table.string('lastName');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contact');
};
