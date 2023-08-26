import { DataTypes, Model } from 'sequelize'

export function defineCharactersModel(sequelize) {
    class Characters extends Model {
        static associate(models) {
            // Definir asociaciones aquí
            Characters.belongsToMany(models.Spells, {
                through: 'CharacterSpell',
                timestamps: false,
            })
        }
    }

    Characters.init(
        {
            id: {
                unique: true,
                type: DataTypes.UUID,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            alternate_names: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },
            species: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            house: {
                type: DataTypes.STRING,
            },
            dateOfBirth: {
                type: DataTypes.STRING,
            },
            yearOfBirth: {
                type: DataTypes.STRING,
            },
            wizard: {
                type: DataTypes.BOOLEAN,
            },
            ancestry: {
                type: DataTypes.STRING,
            },
            eyeColour: {
                type: DataTypes.STRING,
            },
            hairColour: {
                type: DataTypes.STRING,
            },
            wand: {
                type: DataTypes.JSON,
            },
            patronus: {
                type: DataTypes.STRING,
            },
            hogwartsStudent: {
                type: DataTypes.BOOLEAN,
            },
            hogwartsStaff: {
                type: DataTypes.BOOLEAN,
            },
            actor: {
                type: DataTypes.STRING,
            },
            alive: {
                type: DataTypes.BOOLEAN,
            },
            image: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'Characters',
        }
    )
    return Characters
}
