import getCharactersController from '../../controllers/charactersControllers/getChar.js'

const getCharacters = async (req, res) => {
    try {
        const characters = await getCharactersController()
        if (!characters) throw new Error('Error al traer todos los Char')
        res.status(200).json(characters)
    } catch (error) {
        console.error(error)
    }
}

export default getCharacters
