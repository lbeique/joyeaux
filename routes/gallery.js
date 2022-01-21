const express = require('express');
const router = express.Router();

// Get Gallery
router.get("/gallery", (req, res) => {
    res.render('gallery');
});

module.exports = router;