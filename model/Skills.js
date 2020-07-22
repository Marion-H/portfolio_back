const Sequelize = require("sequelize");
const sequelizeInstance = require("../sequelize");

const Skills = sequelizeInstance.define("Skills", {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  logo: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
});

module.exports = Skills