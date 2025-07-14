const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

// Host the dist folder
app.use(express.static(path.join(__dirname, 'dist')))

// GET /message route
app.get('/message', (req, res) => {
  res.send('🔒 This is a secret message from the server.')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})