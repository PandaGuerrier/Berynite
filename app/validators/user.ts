import vine from '@vinejs/vine'
import User from '#models/user'

export const createUserValidator = vine.compile(
  vine.object({
    email: vine.string().email().unique(async (_, value) => {
      const user = await User.findBy('email', value)
      return !user
    }).nullable(),
    password: vine.string().minLength(5).confirmed({ confirmationField: 'repeat_password'}).nullable(),
    username: vine.string().minLength(3).nullable()
  })
)
