'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * 
    */
    await queryInterface.bulkInsert({tableName:'category',schema:'production'}, [{
      id: '1101',
      name: 'merchandise',
      created_at:new Date(),
      updated_at:new Date()
    },{
      id: '1102',
      name: 'EDM',
      created_at:new Date(),
      updated_at:new Date()
    },{
      id: '1103',
      name: 'Pop',
      created_at:new Date(),
      updated_at:new Date()
    },{
      id: '1104',
      name: 'Rock',
      created_at:new Date(),
      updated_at:new Date()
    },{
      id: '1105',
      name: 'Jazz',
      created_at:new Date(),
      updated_at:new Date()
    },{
      id: '1106',
      name: 'Punk',
      created_at:new Date(),
      updated_at:new Date()
    },{
      id: '1107',
      name: 'Classic',
      created_at:new Date(),
      updated_at:new Date()
    },{
      id: '1108',
      name: 'Accoustic',
      created_at:new Date(),
      updated_at:new Date()
    },{
      id: '1109',
      name: 'R&B',
      created_at:new Date(),
      updated_at:new Date()
    },{
      id: '1110',
      name: 'Hip Hop',
      created_at:new Date(),
      updated_at:new Date()
    },{
      id: '1111',
      name: 'LoFi',
      created_at:new Date(),
      updated_at:new Date()
    }
  ],{});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete({tableName:'category',schema:'production'}, null, {});
     //asf
  }
};
