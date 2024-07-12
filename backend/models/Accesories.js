const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    const Accesories = sequelize.define("Accesories", {
        nazwa:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        cena:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    return Accesories
}