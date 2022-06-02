'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('categories', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      desc: {
        type: DataTypes.STRING,
        allowNull:true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt:{
        allowNull: true,
        type: DataTypes.DATE
      }
    },{
      schema:'production',
      initialAutoIncrement: 1100,
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('production.categories',{shcema:'production'});
  }
};