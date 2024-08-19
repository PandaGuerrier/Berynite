import vine from '@vinejs/vine'
import User from '#models/user'

export const createAuthRegisterValidator = vine.compile(
  vine.object({
    email: vine.string().email().unique(async (_, value) => {
      const user = await User.findBy('email', value)
      return !user
    }),
    password: vine.string().minLength(5).confirmed({ confirmationField: 'repeat_password'}),
  })
)

export const createAuthLoginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(5),
  })
)
