var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((error, results) => {
      if (error) {
        console.log('Could not get users from database');
      } else {
        res.sendStatus(200);
        res.send(JSON.stringify(results));
      }
    })
  },

  post: function (req, res) {
    // console.log('req.body', req.body, 'req.query', req.query, 'req.params', req.params);
    models.users.create(req.body.username, (error, result) => {
    if (error) {
        console.log('Could not get users from database');
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    })
  }
};
