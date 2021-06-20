// const { Model, DataTypes } = require('sequelize')
// const sequelize = require('../config/connection')

// class Project extends Model { }

// Model.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         description: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         url: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         snapshot: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//         repository: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         modelName: "project",
//     }
// )

// module.exports = Project;