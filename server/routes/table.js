const express = require('express')
const router = express.Router()
const Table = require('../database/models/table');

// Route to get our form data from API
router.get('/table', (req, res) => {
  const apiUrl = 'https://api.ona.io/api/v1/data/185260';
  fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
     res.send({ data });
  })
  .catch(err => {
     res.redirect('/error');
  });
})

// Route to post our form submission to mongoDB via mongoose
router.post("/table", function(req, res) {
  // Create a new table using req.body
  Table.create(req.body)
    .then(function(dbTable) {
      // If saved successfully, send the the new Table document to the client
      res.json(dbTable);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

module.exports = router

