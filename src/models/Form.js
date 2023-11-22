const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define(
        "Form",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            message: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        }
    )
}