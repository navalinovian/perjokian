'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.hasMany(User, {foreignKey:'roleId', onUpdate:'CASCADE'})
    }
  }
  Role.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      unique:true,
    },
    name:{
      type:DataTypes.STRING,
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
    modelName: 'Role',
    schema:'user',
    tableName:'role',
    timestamps:true,
    paranoid:true,
    underscored:true,
  });
  return Role;
};