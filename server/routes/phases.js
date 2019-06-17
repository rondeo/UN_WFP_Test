const express = require('express');
const router = express.Router();
const ServerPort = require('../database/models/phases');

router.route('/').get(function (req, res) {
    ServerPort.find(function (err, serverports){
    if(err){
      console.log(err);
    }
    else {
      res.json(serverports);
    }
  });
});

module.exports = router;