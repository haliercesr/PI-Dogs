const { DataTypes } = require('sequelize');
const {validateWeightArray,validateHeightArray} = require('../utils/validateModels')

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,    //tambien se puede hacer con DataTypes.UUID Y en vez de autoIncrement usamos defaultValue:DataTypes.UUIDV4(ESTO HACE QUE LOS ID SEAN DIFERENTES)
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
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
      type: DataTypes.ARRAY(DataTypes.DECIMAL),
      allowNull: false,
      validate: {
        isTwoDecimalValues(value) {
          
          throw new Error('El campo height debe ser un array con dos valores.');
        
        },
      },
    },
    weight: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL), // array con numeros
      allowNull: false,
     /* validate: {
        customValidation(value) {
          validateWeightArray(value);   //Para hacer la validacion de los pesos exporto la funcion de Utils
        },
      },*/
    },
    life_span: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,  //ESTO SIRVE PARA DIFERENCIAR PERROS QUE SON TRAIDOS DESDE LA BD O LA API A MI FRONTEND, CUANDO LOS TRAIGO DE LA BD SERA TRUE Y CUANDO LOS TRAIGO DE LA API CREO UNA PROPIEDAD "CREATED:FALSE" 
      defaultValue: true,
    },
  },
    {
      timestamps: false,  //sirve para desaparesca createdAt y updatedAt
      // createdAt: false,
      // updatedAt:false,
    }
  );
};
