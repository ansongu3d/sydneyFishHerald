const path = require('path')
const express = require('express')

require('colors')
require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3001

// Connect to database
connectDB()

const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(express.json({limit: "10mb", extended: true}))
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))
// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/topics', require('./routes/topicRoutes'))

// Serve Frontend
// if (process.env.NODE_ENV === 'catogoryion') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  // FIX: below code fixes app crashing on refresh in deployment
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
// } else {
//   app.get('/', (_, res) => {
//     res.status(200).json({ message: 'Welcome to the Sydney Fishing Herald API' })
//   })
// }

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
