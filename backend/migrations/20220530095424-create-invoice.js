'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({tableName:'invoices', schema:'monetary'}, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.fn('gen_random_uuid')
      },
      user_id:{
        type:Sequelize.UUID,
        allowNull:false,
        reference:{
          model:{
            tableName:'users',
            schema:'user'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({tableName:'invoices', schema:'monetary'});
  }
};