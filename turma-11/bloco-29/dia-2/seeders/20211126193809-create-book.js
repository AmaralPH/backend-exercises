'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books',
      [
        {
          title: 'Como criar uma mente',
          author: 'Raymond Kurzweil',
          pageQuantity: 400,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }
      ], {})
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Books', null, {})
  }
};
