import axios from 'axios'
const URL = 'https://hp-api.onrender.com/api/characters'
import { Characters } from '../../db.js'

const getAllCharController = async () => {
    try {
        const { data } = await axios(URL)
        const dataMapped = data.map((character) => {
            return {
                id: character.id,
                name: character.name,
                alternate_names: character.alternate_names,
                species: character.species,
                gender: character.gender,
                house: character.house,
                dateOfBirth: character.dateOfBirth,
                yearOfBirth: character.yearOfBirth,
                eyeColour: character.eyeColour,
                hairColour: character.hairColour,
                wand: character.wand,
                wizard: character.wizard,
                patronus: character.patronus,
                actor: character.actor,
                alive: character.alive,
                image: character.image,
                ancestry: character.ancestry,
            }
        })
        for (const character of dataMapped) {
            await Characters.create(character)
        }
        return 'Base de datos actualizada'
    } catch (error) {
        console.error(error)
        return false
    }
}

export default getAllCharController
