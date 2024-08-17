import vine, { SimpleMessagesProvider } from '@vinejs/vine'
import User from '#models/user'

const messageProvider = new SimpleMessagesProvider({
  'required': 'Le champ est requis.',
  'email': 'Le champ doit être une adresse email valide.',
  'minLength': 'Le champ doit contenir au moins 5 caractères.',
  'confirmed': 'Les champs ne correspondent pas.',
})

vine.messagesProvider = messageProvider

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
