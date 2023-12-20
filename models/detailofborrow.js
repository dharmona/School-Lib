'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailOfBorrow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Book)
      this.belongsTo(models.Borrow)
    }
  }
  DetailOfBorrow.init({
    borrowID: DataTypes.INTEGER,
    bookID: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailOfBorrow',
  });
  return DetailOfBorrow;
};