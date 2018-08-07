const express = require('express'),
      router = express.Router();


// @route GET /api/posts/test
// @desc Tests post route
// @access Public
router.get('/test', (req, res) => {
  res.json({ message: 'Posts works' });
});

module.exports = router;