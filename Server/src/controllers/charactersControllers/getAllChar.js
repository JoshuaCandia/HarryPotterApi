import axios from 'axios'
const URL = 'https://hp-api.onrender.com/api/characters'

const getAllCharController = async (req, res) => {
    try {
        const { data } = await axios(URL)
        return data
    } catch (error) {
        console.error(error)
    }
}

export default getAllCharController
