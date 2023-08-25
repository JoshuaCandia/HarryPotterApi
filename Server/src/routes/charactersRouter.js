import { Router } from 'express'
import getAllChar from '../handlers/charactersHandlers/getAllChar.js'

const routerCharacter = Router()

routerCharacter.get('/all', getAllChar)

export default routerCharacter
