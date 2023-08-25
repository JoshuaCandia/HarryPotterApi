import { Router } from 'express'
const router = Router()

import routerCharacters from './charactersRouter.js'

router.use('/characters', routerCharacters)

export default router
