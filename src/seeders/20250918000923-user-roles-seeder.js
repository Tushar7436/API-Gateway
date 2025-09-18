'use strict';
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_Roles', [
      { id: 1, userId: 1, roleId: 1, createdAt: new Date('2025-09-11 09:19:19'), updatedAt: new Date('2025-09-11 09:19:19') },
      { id: 2, userId: 2, roleId: 2, createdAt: new Date('2025-09-11 09:19:36'), updatedAt: new Date('2025-09-11 09:19:36') },
      { id: 3, userId: 3, roleId: 3, createdAt: new Date('2025-09-11 09:19:53'), updatedAt: new Date('2025-09-11 09:19:53') },
      { id: 4, userId: 5, roleId: 2, createdAt: new Date('2025-09-11 09:20:10'), updatedAt: new Date('2025-09-11 09:20:10') },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_Roles', { id: { [Op.in]: [1,2,3,4] } });
  }
};
