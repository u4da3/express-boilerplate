const Sequelize = require('sequelize');
const _ = require('lodash');

module.exports = (sequelize, DataTypes) => {
  class User extends Sequelize.Model {}
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      nickname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      groups: {
        type: DataTypes.STRING,
        get() {
          return _.split(this.getDataValue('groups'), ' ');
        },
        set(val) {
          return this.setDataValue('groups', val.join(' '));
        },
      },
      roles: {
        type: DataTypes.STRING,
        get() {
          return _.split(this.getDataValue('roles'), ' ');
        },
        set(val) {
          return this.setDataValue('roles', _.join(val, ' '));
        },
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['username'],
        },
      ],
      sequelize,
    }
  );
  return User;
};
