import vine from '@vinejs/vine'
import User from '#models/user'

export const createUserValidator = vine.compile(
  vine.object({
    email: vine.string().email().optional(),
    password: vine.string().minLength(5).confirmed({ confirmationField: 'repeat_password'}).optional(),
    username: vine.string().minLength(5).unique(async (_, value) => {
      const user = await User.findBy('username', value)
      return !user
    }).optional()
  })
)
