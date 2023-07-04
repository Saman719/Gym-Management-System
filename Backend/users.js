const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
  console.log(req)
});

router.get('/:id', (req, res) => {
  // Handle request for a specific course
});

module.exports = router;
