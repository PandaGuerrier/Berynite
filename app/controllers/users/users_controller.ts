import type { HttpContext } from '@adonisjs/core/http'
import { createUserValidator } from '#validators/user'

export default class UsersController {
  public async update({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(createUserValidator)
    const user = auth.use('web').user!

    const avatar = data.avatar
    delete data.avatar

    await user.merge({
      ...data,
      asAvatar: avatar ? true : user.asAvatar
    }).save()

    if (avatar) {
      await avatar.move('storage/avatars', {
        name: user.id + '.png'
      })
    }

    return response.created(user)
  }
}
