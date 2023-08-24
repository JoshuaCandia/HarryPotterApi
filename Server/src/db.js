import 'dotenv/config'
import { Sequelize } from 'sequelize'
import { defineCharactersModel } from './models/Characters.js'
import { defineSpellsModel } from './models/Spells.js'

// Crear instancia de Sequelize
const sequelize = new Sequelize(
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/harrypotterapi`,
    {
        logging: false,
        native: false,
    }
)

// Definir modelos
const Characters = defineCharactersModel(sequelize)
const Spells = defineSpellsModel(sequelize)

// Definir relaciones
Characters.belongsToMany(Spells, {
    through: 'CharacterSpell',
    timestamps: false,
})
Spells.belongsToMany(Characters, {
    through: 'CharacterSpell',
    timestamps: false,
})

// Exportar modelos y conexión
export { Characters, Spells, sequelize as conn }
