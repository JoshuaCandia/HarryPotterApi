import getAllCharController from '../../controllers/charactersControllers/getAllChar.js'
const getAllChar = async (req, res) => {
    try {
        const response = await getAllCharController()
        if (!response) throw new Error('Error en el controller')
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        console.error(error)
        res.status(500).json(allChar)
    }
}

export default getAllChar
