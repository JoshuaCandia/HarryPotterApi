import axios from 'axios'
const URL = 'https://hp-api.onrender.com/api/spells'

const getAllSpellsController = async () => {
    try {
        const { data } = await axios(URL)
        return data
    } catch (error) {
        console.error(error)
    }
}

export default getAllSpellsController
