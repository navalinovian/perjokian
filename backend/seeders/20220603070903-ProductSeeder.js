'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert({ tableName: 'products', schema: 'production' }, [{
      name: 'V by Maroon5',
      stock:121,
      price:150000,
      category_id:1103,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Overexposed by Maroon5',
      stock:125,
      price:150000,
      category_id:1103,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Hybrid Theory by LinkinPark',
      stock:130,
      price:120000,
      category_id:1104,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Meteora by LinkingPark',
      stock:130,
      price:100000,
      category_id:1104,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'NewYork Jazz',
      stock:130,
      price:100000,
      category_id:1105,
      created_at: new Date(),
      updated_at: new Date()
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete({tableName:'products',schema:'production'}, null, {});
  }
};
