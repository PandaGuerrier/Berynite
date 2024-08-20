import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import PollsController from '#controllers/common/polls_controller'

router.group(() => {
  router.get('/', [PollsController, 'index']).as('polls.index')
  router.get('/create', [PollsController, 'createView']).as('polls.createView')
  router.post('/', [PollsController, 'create']).as('polls.create')
  router.get('/:id', [PollsController, 'show']).as('polls.show')
  router.get('/:id/edit', [PollsController, 'editView']).as('polls.editView')
  router.put('/:id', [PollsController, 'update']).as('polls.update')
  router.delete('/:id', [PollsController, 'destroy']).as('polls.delete')
}).prefix('polls').middleware(middleware.auth())
