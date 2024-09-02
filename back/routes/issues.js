const express = require('express')
const router = express.Router()


// Hard coded issues
// TODO: grab this data from a real DB
const issues = [
  {id: 1, title: '1st issue', description: 'The first issue ever'},
  {id: 2, title: '2nd issue', description: 'The second issue ever'},
  {id: 3, title: '3rd issue', description: 'The third issue ever'},
  {id: 4, title: '4th issue', description: 'The fourth issue ever'},
  {id: 5, title: '5th issue', description: 'The fifth issue ever'},
]

// Returns all issues
router.get('/', (req, res) => {
  res.json({data: issues})
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
