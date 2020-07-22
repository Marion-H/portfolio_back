const Sequelize = require('sequelize')
const sequelizeInstance = require('../sequelize')

const Project = sequelizeInstance.define("Project", {
    uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING(400),
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
})

module.exports = Project

