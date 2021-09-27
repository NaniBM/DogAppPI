const { DataTypes, Sequelize } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return { metric: this.getDataValue("height") };
        },
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return { metric: this.getDataValue("weight") };
        },
      },
      life_span: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("life_span") + " Years";
        },
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
        defaultValue:
          "https://image.freepik.com/free-photo/cute-little-dog-impersonating-business-person_23-2148985938.jpg",
      },
    },
    {
      timestamps: false,
    }
  );
};
