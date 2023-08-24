import { Router } from 'express'
const router = Router()

import routerCharacters from './routers/charactersRouter.js'

router.use('/characters', routerCharacters)

export default router
