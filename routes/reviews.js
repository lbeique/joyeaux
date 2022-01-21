const express = require('express');
const router = express.Router();

// Get Reviews
router.get("/reviews", (req, res) => {
    res.render('reviews');
});

module.exports = router;