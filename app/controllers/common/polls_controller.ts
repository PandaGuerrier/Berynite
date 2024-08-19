import type { HttpContext } from '@adonisjs/core/http'
import Poll from '#models/poll'
import { createPollValidator } from '#validators/poll'
import { Voter } from '../../type/voter.js'

export default class PollsController {
  public async index({ inertia }: HttpContext) {
    const polls =  await Poll.query().where('status', 'published').preload('user').orderBy('created_at', 'desc')

    return inertia.render('polls/Index', {
      polls,
    })
  }

  public async show({ inertia, params }: HttpContext) {
    const poll = await Poll.query().where('id', params.id).firstOrFail()

    return inertia.render('polls/Show', {
      poll,
    })
  }

  public async createView({ inertia }: HttpContext) {
    return inertia.render('polls/Create')
  }

  public async create({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(createPollValidator)
    const user = auth.use('web').user!

    const poll = await Poll.create({
      ...data,
      userId: user.id,
      voters: [] as Voter[],
    })

    await poll.related('user').associate(user)
    await user.related('polls').attach([poll.id])

    return response.created(poll)
  }
}
