const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  getterMethods: {
    imageURL: function() {
      return `http://loremflickr.com/400/300(/planet,${this.name}/all`;
    }
  }
});
