const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,    //tambien se puede hacer con DataTypes.UUID Y en vez de autoIncrement usamos defaultValue:DataTypes.UUIDV4(ESTO HACE QUE LOS ID SEAN DIFERENTES)
      allowNull: false,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: 0,
        max: 2,
      }
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: 0,
        max: 150,
      }
    },
    yearsoflife: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 40,
      }
    },
  },
    {
      timestamps:false,  //sirve para desaparesca createdAt y updatedAt
           // createdAt: false,
           // updatedAt:false,
    }
  );
};
