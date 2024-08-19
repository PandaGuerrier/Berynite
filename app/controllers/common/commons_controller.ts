import type { HttpContext } from '@adonisjs/core/http'
import Poll from '#models/poll'

export default class CommonsController {
  public async index({ inertia }: HttpContext) {
    const polls =  await Poll.query().where('status', 'published').preload('user').orderBy('created_at', 'desc').limit(10)

    return inertia.render('Home', {
      polls
    })
  }
}
