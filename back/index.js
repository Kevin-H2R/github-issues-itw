const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  console.log("Hellow")
  res.json({"message": 'YOW'})
})
app.listen(3000, () => {
  console.log("Hi Sitemate ! App up and running")
})
