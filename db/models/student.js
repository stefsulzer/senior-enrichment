const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  getterMethods: {
    email: function() {
      return `${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@hamilton.edu`;
    },
    imageURL: function() {
      return `http://loremflickr.com/300/300/portrait,${this.firstName}/all`;
    }
  }
});

// Make association in db index, that student belongsTo campus
