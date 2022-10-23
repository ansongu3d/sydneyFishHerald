const express = require('express')
const router = express.Router()
const {
  getTopics,
  getTopic,
  createTopic,
  deleteTopic,
  updateTopic,
} = require('../controllers/topicController')
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

const { protect } = require('../middleware/authMiddleware')

// Re-route into note router
const noteRouter = require('./noteRoutes')
router.use('/:topicId/notes', noteRouter)

router.route('/').get(protect, getTopics).post(protect, createTopic)

router
  .route('/:id')
  .get(protect, getTopic)
  .delete(protect, deleteTopic)
  .put(protect, updateTopic)

module.exports = router
