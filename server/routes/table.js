const express = require('express');
const router = express.Router();
const Table = require('../database/models/table');


router.post('/table', function(req,res){
  Table.create(req.body, function(err , doc){
    if (err) { return console.error(err) }
    console.log(doc)
    return db.close()
  })
});


module.exports = router;