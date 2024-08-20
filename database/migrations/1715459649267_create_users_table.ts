import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('email').notNullable().unique()
      table.string('username').notNullable().defaultTo("Guest")
      table.string('password').nullable()
      table.boolean('as_avatar').defaultTo(false)
      table.integer('role_id').unsigned().references('roles.id').onDelete('SET NULL')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
