'use strict';
const {
  Model
} = require('sequelize');
const Invoice = require('./invoice');
const Product = require('./product');

module.exports = (sequelize, DataTypes) => {
  class InvoiceItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product, Invoice}) {
      // define association here
      this.belongsTo(Product, {foreignKey:'productId', onUpdate:'NO ACTION', onDelete:'NO ACTION'})
      this.belongsTo(Invoice, {foreignKey:'invoiceId', onUpdate:'NO ACTION', onDelete:'NO ACTION'})
    }
  }
  InvoiceItem.init({
    productId:{
      type:DataTypes.UUID,
      allowNull:false,
      field:'product_id',
      primaryKey:true,
      references:{
        model:Product,
        key:'id'
      }
    },
    invoiceId:{
      type:DataTypes.UUID,
      allowNull:false,
      field:'invoice_id',
      primaryKey:true,
      references:{
        model:Invoice,
        key:'id'
      }
    },
    quantity:{
      type:DataTypes.INTEGER,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'InvoiceItem',
    tableName:'invoice_items',
    timestamps:false,
    createdAt:false,
    updatedAt:false,
    underscored:true,
  });
  return InvoiceItem;
};