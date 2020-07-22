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
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING(400),
        allowNull: false,
      },
      logo: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
})

module.exports = Contact