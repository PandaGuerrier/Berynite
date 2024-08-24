import type { HttpContext } from '@adonisjs/core/http'
import { createAuthLoginValidator, createAuthRegisterValidator } from '#validators/auth'
import User from '#models/user'
import Role from '#models/role'
import Username from '../../data/username.js'

export default class AuthController {
  public async loginView({ inertia }: HttpContext) {
    return inertia.render('auth/Login')
  }

  public async registerView({ inertia }: HttpContext) {
    return inertia.render('auth/Register')
  }

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
    const username = await this.getRandomUsername()
    const user = await User.create({
      ...data,
      username: username
    })

    const role = await Role.query().where('slug', 'user').firstOrFail()
    await user.related('role').associate(role)
    await auth.use('web').login(user)

    await user.load('role')
    return response.created(user)
  }

  public async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('auth.login')
  }

  private async getRandomUsername(): Promise<string> {
    const randomUsername = Username.start[Math.floor(Math.random() * Username.start.length)] + Username.end[Math.floor(Math.random() * Username.end.length)]
    const user = await User.findBy('username', randomUsername)

    if (user) {
      return this.getRandomUsername()
    }

    return randomUsername
  }
}
