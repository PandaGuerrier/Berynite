import type { HttpContext } from '@adonisjs/core/http'

export default class CommonsController {
  public async index({ inertia }: HttpContext) {
    return inertia.render('Home')
  }
}
