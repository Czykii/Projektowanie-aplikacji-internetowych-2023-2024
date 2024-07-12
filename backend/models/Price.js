const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    const Price = sequelize.define("Price", {
        model_auta:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        cena_1:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cena_7:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cena_30:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })

    return Price
}