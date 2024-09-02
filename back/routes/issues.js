const express = require('express')
const router = express.Router()
const requestValidator = require('../utils/requestValidator')


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
  try {
    const {id, title, description} = requestValidator.validatePost(req)
    const filtered = issues.filter(issue => issue.id === id)
    if (filtered.length === 0) {
      return res.status(404).json({message: 'Issue not found'})
    }
    // Should never happen
    if (filtered.length > 1) {
      return res.status(409).json({message: 'Conflict, multiple issues found with the same ID'})
    }
    const index = issues.indexOf(filtered[0])
    issues[index].title = title
    issues[index].description = description
    console.log(issues[index])
    return res.json({message: `Issue with id ${id} was updated successfully`})
  } catch (err) {
    return res.status(401).json({message: err.message})
  }
})

router.put('/', (req, res) => {
  try {
    const {title, description} = requestValidator.validatePut(req)
    const lastId = issues.reduce((acc, cur) => {
      return cur.id > acc ? cur.id : acc
    }, 0)
    const newItem = {id: lastId + 1, title, description}
    issues.push(newItem)
    console.log(newItem)
    return res.json({message: `Issue with id ${lastId + 1} was created successfully`})
  } catch (err) {
    return res.status(401).json({message: err.message})
  }
})

router.delete('/', (req, res) => {
  const id = Number.parseInt(req.body.id)
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
  const deleted = issues.splice(issues.indexOf(filtered[0]), 1);
  console.log(deleted)
  return res.json({message: `Issue with id ${filtered[0].id} was deleted`})
})


module.exports = router
