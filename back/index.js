const express = require('express')
const app = express()
const issuesRouter = require('./routes/issues')


app.use(express.json())

app.get('/', (req, res) => {
  console.log("Hellow")
  res.json({"message": 'YOW'})
})

app.use('/issues', issuesRouter)
app.listen(3000, () => {
  console.log("Hi Sitemate ! App up and running")
})
