'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({tableName:'invoice_items', schema:'monetary'}, {
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        reference:{
          model:{
            tablename:'products',
            schema:'production'
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
            tableName:'invoices',
            schema:'monetary'
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
    await queryInterface.dropTable({tableName:'invoice_items', schema:'monetary'});
  }
};