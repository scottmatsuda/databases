var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query(
      `SELECT * FROM 'users'`,
      function(error, results) {
        console.log('results', result);
        if (error){
          callback(error);
        } else {
          callback(error, results); // results contains rows returned by server
        }
      }
      )
  },

  create: function (username, callback) {
    db.query(
      `INSERT INTO users (username) VALUES ('${username}')`,
      function(error, results) {
        callback(error, results);
      }
    )
  }
};

