
exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) =>{
    table.increments("id")
    table.text("name").notNull().unique()
    table.text("description")
    table.boolean("completed").defaultTo(false)  //probably not written this way!!!!
  })

  await knex.schema.createTable("resources", (table) => {
      table.increments("id")
      table.text("name").notNull().unique()
      table.text("description")
  })

  await knex.schema.createTable("tasks", (table) =>{
      table.increments("id")
      table.text("description").notNull()
      table.text("notes")
      table.boolean("completed").defaultTo(false)
      table.integer("project_id").references("id").inTable("projects")
  })

//   await knex.schema.createTable("resource_projects", (table) =>{
//       table.increments("id")
//   })

};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
};


exports.up