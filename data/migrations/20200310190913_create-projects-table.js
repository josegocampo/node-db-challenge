exports.up = async function(knex) {
	await knex.schema.createTable("projects", (table) => {
		table.increments("id")
		table.text("name").notNullable()
        table.text("description")
        table.boolean("completed").defaultTo("false")
	})

	await knex.schema.createTable("tasks", (table) => {
		table.increments("id")
        table.text("description").notNullable()
        table.text("notes").notNullable()
        table.boolean("completed").defaultTo("false")
        table.integer("project_id").references("id").inTable("projects")
	})

	await knex.schema.createTable("resources", (table) => {
		table.increments("id")
        table.text("name").notNullable()
		table.text("description")
	})

	
	await knex.schema.createTable("project_resources", (table) => {
		table.integer("project_Id").references("id").inTable("projects")
		table.integer("resource_Id").references("id").inTable("resources")
		table.text("resource_quantity").notNullable()
		
	
	table.primary([ "project_id", "resource_id" ]);
	})}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("project_resources")
	await knex.schema.dropTableIfExists("resources")
	await knex.schema.dropTableIfExists("tasks")
	await knex.schema.dropTableIfExists("projects")
}