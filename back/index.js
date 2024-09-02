const express = require('express')
const app = express()
var cors = require('cors')
const issuesRouter = require('./routes/issues')


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  console.log("Hellow")
  res.json({"message": 'YOW'})
})

app.use('/issues', issuesRouter)
app.listen(4000, () => {
  console.log("Hi Sitemate ! App up and running")
})
