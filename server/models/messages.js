var db = require('../db');

module.exports = {

  getAll: function (callback) {
    db.query(
    'SELECT * FROM `messages`',
    function(error, results) {
      if (error){
        callback(error);
      } else {
        callback(error, results); // results contains rows returned by server
      }
    }
    )
  }, // a function which produces all the messages

  create: function (username, text, roomname, callback) {
    db.query(
      `INSERT INTO messages (user_id, text, roomname) VALUES("${user_id}", "${text}", "${roomname}")`,
      function(error, results) {
        callback(error, results);
      }
    )
  }
};

`INSERT INTO messages as m
  (user_id, text, roomname) VALUES('SELECT id
    FROM users as u WHERE u.id = m.user_id', "${text}", "${roomname}")`