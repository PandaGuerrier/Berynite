import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'

import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import Role from '#models/role'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'


const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password'
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({isPrimary: true})
  declare id: number

  @column()
  declare email: string

  @column()
  declare username: string | null

  @column()
  declare password: string

  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>

  @column()
  declare roleId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
