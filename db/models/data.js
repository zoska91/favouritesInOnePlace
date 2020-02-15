'use strict';
module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define('Data', {
    groupId: DataTypes.STRING,
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    link: DataTypes.STRING
  }, {});
  Data.associate = function(models) {
    // associations can be defined here
  };
  return Data;
};