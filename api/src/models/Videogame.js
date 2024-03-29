const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released:{
      type: DataTypes.STRING,
      allowNull: true
    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    platforms:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    background_image:{
      type:DataTypes.STRING,
      allowNull: false
    },
    createdInDataBase:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true
    }
  },{timestamps:false});
};
