const Sequelize = require("sequelize");
const sequelizeInstance = require("../sequelize");

const Formation = sequelizeInstance.define("Formation", {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  school: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  diploma: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  year: {
    type: Sequelize.STRING(300),
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING(1000),
    allowNull: true,
  },
});

module.exports = Formation