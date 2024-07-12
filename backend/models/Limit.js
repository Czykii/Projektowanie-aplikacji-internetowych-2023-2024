const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    const Limit = sequelize.define("Limit", {
        okres:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        kilometry:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    return Limit
}