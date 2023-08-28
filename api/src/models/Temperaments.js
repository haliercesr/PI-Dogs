const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('temperaments', {
        id: {
            type: DataTypes.INTEGER,    //tambien se puede hacer con DataTypes.UUID Y en vez de autoIncrement usamos defaultValue:DataTypes.UUID
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
        {
            timestamps: true,
            createdAt: false,
            updatedAt:false,

        });
};
