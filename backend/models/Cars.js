const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    const Cars = sequelize.define("Cars", {
        car:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        fuel:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        power:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gearbox:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seats:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        acceleration:{
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        limit:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        drive:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Cars
}