const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('USER PAGE');
});

module.exports = router;
