var models = require('../models');

module.exports = {

  get: function (req, res) {
    models.messages.getAll((error, results) => {
      if (error) {
        console.log('Could not get messages from database');
      } else {
        res.sendStatus(200);
        res.send(JSON.stringify(results));
      }
    })
  }, // a function which handles a get request for all messages


  post: function (req, res) {
    console.log('req.body', req.body, 'req.query', req.query, 'req.params', req.params);
    models.messages.create(req.body.username, req.body.message, req.body.roomname, (error, result) => {
      if (error) {
        console.log('Could not post message to messages');
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    })
  }
};


