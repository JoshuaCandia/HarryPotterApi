import { Router } from 'express'

const routerCharacter = Router()

routerCharacter.get('/', (req, res) => {
    res.send('Characters')
})

export default routerCharacter
