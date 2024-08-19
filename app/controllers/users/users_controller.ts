import type { HttpContext } from '@adonisjs/core/http'
import { createUserValidator } from '#validators/user'

export default class UsersController {
  public async update({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(createUserValidator)
    const user = auth.use('web').user!

    await user.merge(data).save()

    return response.created(user)
  }
}
