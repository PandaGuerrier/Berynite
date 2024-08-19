import type { HttpContext } from '@adonisjs/core/http'
import { createUserValidator } from '#validators/user'

export default class UsersController {
  public async update({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(createUserValidator)

    const user = auth.user!
    user.merge(data)
    await user.save()

    return response.created(user)
  }
}
