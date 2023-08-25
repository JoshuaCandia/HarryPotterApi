import getAllCharController from '../../controllers/charactersControllers/getAllChar.js'
const getAllChar = async (req, res) => {
    try {
        const allChar = await getAllCharController()
        res.status(200).json(allChar)
    } catch (error) {
        console.error(error)
        res.status(500).json(allChar)
    }
}

export default getAllChar
