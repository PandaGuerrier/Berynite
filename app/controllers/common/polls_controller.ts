import type { HttpContext } from '@adonisjs/core/http'
import Poll from '#models/poll'
import { createPollValidator } from '#validators/poll'

export default class PollsController {
  public async index({inertia}: HttpContext) {
    const polls = await Poll.query().where('status', 'published').preload('user').orderBy('created_at', 'desc')

    return inertia.render('polls/Index', {
      polls,
    })
  }

  public async userPolls({inertia, auth}: HttpContext) {
    const user = auth.use('web').user!
    const polls = await user.related('polls').query().preload('user').orderBy('created_at', 'desc')

    return inertia.render('polls/Index', {
      polls,
    })
  }

  public async show({inertia, params}: HttpContext) {
    const poll = await Poll.query().where('id', params.id).firstOrFail()

    return inertia.render('polls/Show', {
      poll,
    })
  }

  public async createView({inertia}: HttpContext) {
    return inertia.render('polls/Create')
  }

  public async create({request, response, auth}: HttpContext) {
    const data = await request.validateUsing(createPollValidator)
    const user = auth.use('web').user!

    const poll = await Poll.create({
      ...data,
      userId: user.id,
    })

    await poll.related('user').associate(user)
    await user.related('polls').attach([poll.id])

    return response.created(poll)
  }

  public async editView({ inertia, params, bouncer }: HttpContext) {
    const poll = await Poll.query().where('id', params.id).firstOrFail()
    await bouncer.with('PollPolicy').authorize('update', poll)

    return inertia.render('polls/Edit', {
      poll,
    })
  }

  public async update({request, response, params, bouncer }: HttpContext) {
    const poll = await Poll.query().where('id', params.id).firstOrFail()
    await bouncer.with('PollPolicy').authorize('update', poll)
    const data = await request.validateUsing(createPollValidator)

    poll.merge(data)
    await poll.save()

    return response.created(poll)
  }

  public async destroy({response, params, bouncer}: HttpContext) {
    const poll = await Poll.query().where('id', params.id).firstOrFail()
    await bouncer.with('PollPolicy').authorize('delete', poll)

    await poll.delete()

    return response.noContent()
  }
}
