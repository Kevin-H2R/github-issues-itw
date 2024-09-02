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
  return res.json({data: issues})
})

// Returns a single issue by ID
router.get('/:id', (req, res) => {
  const id = Number.parseInt(req.params.id)
  if (Number.isNaN(id)) {
    return res.status(401).json({message: 'Issue id must be a number'})
  }
  const filtered = issues.filter(issue => issue.id === id)
  if (filtered.length === 0) {
    return res.status(404).json({message: 'Issue not found'})
  }
  // Should never happen
  if (filtered.length > 1) {
    return res.status(409).json({message: 'Conflict, multiple issues found with the same ID'})
  }
  return res.json(filtered[0])
})

// Updates an existing issue
router.post('/', (req, res) => {
  res.json('Updates issue with id: ' + req.body.id)
})

router.put('/', (req, res) => {
  res.json('Creates issue with id: ' + req.body.id)
})


module.exports = router
