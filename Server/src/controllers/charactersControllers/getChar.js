import { Characters } from '../../db.js'

const getCharactersController = () => {
    try {
        return Characters.findAll()
    } catch (error) {
        return false
    }
}
export default getCharactersController
