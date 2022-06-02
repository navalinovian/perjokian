'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      // define association here
      this.hasMany(Product, {foreignKey:'categoryId', onUpdate:'CASCADE'})
    }
  }
  Category.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true,
    }, 
    name:{
      type:DataTypes.STRING,
      allowNull:false,
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
    modelName: 'Category',
    schema:'production',
    tableName:'category',
    timestamps:true,
    paranoid:true,
    underscored:true,
    freezeTableName:true
  });

  return Category;
};