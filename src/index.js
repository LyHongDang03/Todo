const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

const database = require('./config/db/db.js')
const route = require('./routes/index.js')

database.connect()

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
