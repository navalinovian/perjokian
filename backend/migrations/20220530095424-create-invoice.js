'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({tableName:'invoices'}, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        // defaultValue:Sequelize.fn('gen_random_uuid'),
        defaultValue:Sequelize.fn('UUID') //mysql
      },
      user_id:{
        type:Sequelize.UUID,
        allowNull:false,
        reference:{
          model:{
            tableName:'users'
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
    await queryInterface.dropTable({tableName:'invoices'});
  }
};