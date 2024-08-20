import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import UsersController from '#controllers/users/users_controller'

router.group(() => {
  router.on('username').renderInertia('users/Username')
  router.on('avatar').renderInertia('users/Avatar')
  router.patch('/', [UsersController, 'update']).as('user.update')
}).prefix('me').middleware(middleware.auth())
