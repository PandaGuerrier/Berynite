import type { HttpContext } from '@adonisjs/core/http'

export default class CommonsController {
  public async index({ inertia, auth }: HttpContext) {
    const user = auth.use('web').user

    return inertia.render('Home', {
      user
    })
  }
}
