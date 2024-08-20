/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import CommonsController from '#controllers/common/commons_controller'
import './routes/auth.ts'
import './routes/users.ts'
import './routes/polls.ts'

router.get('/', [CommonsController, 'index'])


