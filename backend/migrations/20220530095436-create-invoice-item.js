'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({tableName:'invoice_items'}, {
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        reference:{
          model:{
            tablename:'products'
          },
          key:'id'
        }
      },
      invoice_id:{
        allowNull:false,
        primaryKey:true,
        type:Sequelize.UUID,
        reference:{
          model:{
            tableName:'invoices'
          },
          key:'id'
        }
      },
      quantity:{
        type:Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({tableName:'invoice_items'});
  }
};