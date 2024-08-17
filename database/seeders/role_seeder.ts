import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role from '#models/role'

export default class extends BaseSeeder {
  async run() {
    await Role.createMany([
      {
        id: 0,
        name: 'User',
        slug: 'user',
        power: 0,
      },
      {
        name: 'Admin',
        slug: 'admin',
        power: 100,
      },
    ])
  }
}
