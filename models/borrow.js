'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Admin)
      this.belongsTo(models.Member)
      this.hasMany(models.DetailOfBorrow, {
        foreignKey:"borrowID", as:"DetailOfBorrow"
      })
    }
  }
  Borrow.init({
    memberID: DataTypes.INTEGER,
    adminID: DataTypes.INTEGER,
    date_of_borrow: DataTypes.DATE,
    date_of_return: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Borrow',
  });
  return Borrow;
};