/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AuthController from '#controllers/users/auth_controller'

router.group(() => {
  router.post('/login', [AuthController, 'login'])
}).prefix('auth')

router.on('/').renderInertia('Home')


