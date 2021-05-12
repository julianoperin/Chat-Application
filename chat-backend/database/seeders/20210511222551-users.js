"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@gmail.com",
        password: "secret",
        gender: "male",
      },
      {
        firstName: "Juliano",
        lastName: "Perin",
        email: "juliano@gmail.com",
        password: "secret",
        gender: "male",
      },
      {
        firstName: "Talita",
        lastName: "Souza",
        email: "talita@gmail.com",
        password: "secret",
        gender: "female",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
