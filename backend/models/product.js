'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category}) {
      // define association here
      this.belongsTo(Category, {foreignKey:'categoryId'})
    }
  }
  Product.init({
    id:{
      type: DataTypes.UUID,
      primaryKey:true,
      allowNull:false,
      defaultValue:DataTypes.UUIDV4
    },
    name:{
      type: DataTypes.STRING,
    },
    price:{
      type: DataTypes.INTEGER,
    },
    stock:{
      type:DataTypes.INTEGER,
    }, 
    categoryId:{
      type: DataTypes.INTEGER,
      field:'category_id'
    },
    createdAt:{
      type:DataTypes.DATE,
      field:'created_at',
      defaultValue:DataTypes.NOW,
      allowNull:false
    },
    updatedAt:{
      type:DataTypes.DATE,
      field:'updated_at',
      defaultValue:DataTypes.NOW
    },
    deletedAt:{
      type:DataTypes.DATE,
      field:'deleted_at'
    } 
  }, {
    sequelize,
    modelName: 'Product',
    schema:'production',
    tableName:'product',
    timestamps:true,
    paranoid:true,
    underscored:true,
  });
  return Product;
};