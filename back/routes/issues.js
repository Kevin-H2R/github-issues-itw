const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json('Issue getter')
})

module.exports = router
