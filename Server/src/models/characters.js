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
                allowNull: false,
            },
            dateOfBirth: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            yearOfBirth: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            wizard: {
                type: DataTypes.BOOLEAN,
            },
            ancestry: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            eyeColour: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            hairColour: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            wand: {
                type: DataTypes.JSON,
                allowNull: false,
            },
            patronus: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            hogwartsStudent: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            hogwartsStaff: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
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
