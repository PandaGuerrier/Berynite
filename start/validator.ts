import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messageProvider = new SimpleMessagesProvider({
  'required': 'Le champ est requis.',
  'email': 'Le champ doit être une adresse email valide.',
  'minLength': 'Le champ doit contenir au moins 5 caractères.',
  'confirmed': 'Les champs ne correspondent pas.',
})

vine.messagesProvider = messageProvider
