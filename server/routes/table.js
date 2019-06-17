const express = require('express');
const router = express.Router();
const Table = require('../database/models/table');

router.post('/table', function(req,res){
  Table.create(req.body).then(function(table){
    res.send(table);
  });
});

module.exports = router;