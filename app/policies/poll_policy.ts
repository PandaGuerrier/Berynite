import User from '#models/user'
import Poll from '#models/poll'
import { BasePolicy } from '@adonisjs/bouncer'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class PollPolicy extends BasePolicy {
  update(user: User, poll: Poll): AuthorizerResponse {
    return user.id === poll.userId || user.role.slug === 'admin'
  }

  view(user: User, poll: Poll): AuthorizerResponse {
    return user.id === poll.userId || user.role.slug === 'admin' || poll.status === 'published'
  }

  delete(user: User, poll: Poll): AuthorizerResponse {
    return user.id === poll.userId || user.role.slug === 'admin'
  }
}
