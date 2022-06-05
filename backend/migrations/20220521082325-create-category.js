'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({tableName:'categories', schema:'production'}, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      desc: {
        type: Sequelize.STRING,
        allowNull:true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at:{
        allowNull: true,
        type: Sequelize.DATE
      }
    },{
      initialAutoIncrement: 1100,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({tableName:'categories', shcema:'production'},{});
  }
};