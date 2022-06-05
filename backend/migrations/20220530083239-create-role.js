'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({tableName:'roles', schema:'user'}, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        unique:true,
        allowNull:false,
        type: Sequelize.STRING
      },
      desc:{
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      },
      deleted_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{initialAutoIncrement: 2200});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({tableName:'roles', schema:'user'});
  }
};