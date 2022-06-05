'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({tableName:'products', schema:'production'}, {
      id: {
        allowNull: false,
        defaultValue: Sequelize.fn('gen_random_uuid'),
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'categories',
            schema:'production'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({tableName:'products', schema:'production'});
  }
};