import type { HttpContext } from '@adonisjs/core/http'
import { createAuthLoginValidator, createAuthRegisterValidator } from '#validators/auth'
import User from '#models/user'

export default class AuthController {
  public async login({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(createAuthLoginValidator)
    const user = await User.verifyCredentials(data.email, data.password)

    if (!user) {
      return response.badRequest('Invalid credentials')
    }

    await user.load('role')
    await auth.use('web').login(user)

    return response.created(user)
  }

  public async register({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(createAuthRegisterValidator)
    const user = await User.create(data)

    await user.load('role')
    await auth.use('web').login(user)

    return response.created(user)
  }

  public async logout({ auth }: HttpContext) {
    await auth.use('web').logout()
  }
}
