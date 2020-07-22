const Sequelize = require('sequelize')
const sequelizeInstance = require('../sequelize')

const Contact = sequelizeInstance.define("Contact", {
    uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      link: {
        type: Sequelize.STRING(400),
        allowNull: true,
      },
      picture: {
        type: Sequelize.STRING(250),
        allowNull: true,
      },
})

module.exports = Contact