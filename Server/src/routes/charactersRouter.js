import { Router } from 'express'
import getAllChar from '../handlers/charactersHandlers/getAllChar.js'
import getCharacters from '../handlers/charactersHandlers/getChar.js'

const routerCharacter = Router()

routerCharacter.get('/', getCharacters)
routerCharacter.get('/all', getAllChar)

export default routerCharacter
