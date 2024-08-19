import type { HttpContext } from '@adonisjs/core/http'
import Poll from '#models/poll'

export default class PollsController {
  public async index({ inertia }: HttpContext) {
    const polls =  await Poll.query().where('status', 'published').preload('user').orderBy('created_at', 'desc')

    return inertia.render('polls/Index', {
      polls,
    })
  }
}
