import vine from '@vinejs/vine'

export const createPollValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(5),
    content: vine.string().minLength(10),
    status: vine.enum(['draft', 'published', 'finished']),
  })
)
