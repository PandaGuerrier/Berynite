import router from '@adonisjs/core/services/router'
import AuthController from '#controllers/users/auth_controller'
import { middleware } from '#start/kernel'

router.group(() => {
  router.group(() => {
    router.get('/login', [AuthController, 'loginView']).as('auth.login')
    router.get('/register', [AuthController, 'registerView']).as('auth.register')
    router.post('/login', [AuthController, 'login'])
    router.post('/register', [AuthController, 'register'])
  }).middleware(middleware.guest())

  router.group(() => {
    router.get('/logout', [AuthController, 'logout'])
  }).middleware(middleware.auth())
}).prefix('auth')
