const express = require('express');
const router = express.Router();

// Get Book Table
router.get("/", (req, res) => {
    res.render('bookTable');
});

module.exports = router;