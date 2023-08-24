import { DataTypes } from 'sequelize'

export default {
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
}
