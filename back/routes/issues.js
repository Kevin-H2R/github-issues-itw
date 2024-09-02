const express = require('express')
const router = express.Router()

// Returns all issues
router.get('/', (req, res) => {
  res.json('Gets all issues')
})

// Returns a single issue by ID
router.get('/:id', (req, res) => {
  res.json('Gets issue with id: ' + req.params.id)
})

// Updates an existing issue
router.post('/', (req, res) => {
  res.json('Updates issue with id: ' + req.body.id)
})

router.put('/', (req, res) => {
  res.json('Creates issue with id: ' + req.body.id)
})


module.exports = router
