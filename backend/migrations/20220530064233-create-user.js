'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({tableName:'users'}, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        // defaultValue: Sequelize.fn('gen_random_uuid'),
        defaultValue: Sequelize.fn('UUID'), //mysql
      },
      username: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      role_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        reference:{
          model:{
            tableName:'roles'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      deleted_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({tableName:'users'});
  }
};