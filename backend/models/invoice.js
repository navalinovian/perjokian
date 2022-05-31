'use strict';
const {
  Model
} = require('sequelize');
const User = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Product, InvoiceItem}) {
      // define association here
      this.belongsToMany(Product, {foreignKey:'invoiceId', onUpdate:'NO ACTION', onDelete:'NO ACTION', through:InvoiceItem})
      this.belongsTo(User, {foreignKey:'customerId', onUpdate:'NO ACTION', onDelete:'NO ACTION'})
    }
  }
  Invoice.init({
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      allowNull:false,
      defaultValue:DataTypes.UUIDV4
    },
    customerId:{
      type:DataTypes.INTEGER,
      field:'customer_id',
      references:{
        model:User,
        key:'id'
      }
    },
    createdAt:{
      type:DataTypes.DATE,
      field:'created_at',
      defaultValue:DataTypes.NOW,
      allowNull:false
    }
     
  }, {
    sequelize,
    modelName: 'Invoice',
    schema:'monetary',
    tableName:'invoice',
    timestamps:true,
    updatedAt:false,
    underscored:true,
  });
  return Invoice;
};