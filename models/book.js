'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.DetailOfBorrow, {
        foreignKey:"bookID", as: "DetailOfBorrow"
      })
    }
  }
  Book.init({
    isbn: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    cover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};