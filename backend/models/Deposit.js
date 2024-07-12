const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    const Deposit = sequelize.define("Deposit", {
        wiek:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        cena:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    return Deposit
}