import { DataTypes, Model } from 'sequelize'

export function defineSpellsModel(sequelize) {
    class Spells extends Model {
        static associate(models) {
            // Definir asociaciones aquí
            Spells.belongsToMany(models.Characters, {
                through: 'CharacterSpell',
                timestamps: false,
            })
        }
    }
    Spells.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sequelize,
        modelName: 'Spells',
    })
    return Spells
}
