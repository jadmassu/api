'use strict';
// import { QueryInterface, INTEGER, DATE, STRING } from 'sequelize';
const { INTEGER, DATE, STRING } = require("sequelize");

module.exports = {
  async up(queryInterface,) {
    return queryInterface.createTable("users", {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      lastName: {
        type: STRING,
      },
      email: {
        type: STRING,
      },
      createdAt: DATE,
      updatedAt: DATE,
    });
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
