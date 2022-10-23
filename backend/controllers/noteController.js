const asyncHandler = require('express-async-handler')

const Note = require('../models/noteModel')
const Post = require('../models/postModel')

// NOTE: no need to get the user, we already have them on req object from
// protect middleware. The protect middleware already checks for valid user.

// @desc    Get notes for a topic
// @route   GET /api/topics/:topicId/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  const topic = await Post.findById(req.params.topicId)

  if (topic.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const notes = await Note.find({ topic: req.params.topicId })

  res.status(200).json(notes)
})

// @desc    Create topic note
// @route   POST /api/topics/:topicId/notes
// @access  Private
const addNote = asyncHandler(async (req, res) => {
  const topic = await Post.findById(req.params.topicId)

  if (topic.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const note = await Note.create({
    text: req.body.text,
    isStaff: false,
    topic: req.params.topicId,
    user: req.user.id,
  })

  res.status(200).json(note)
})

module.exports = {
  getNotes,
  addNote,
}
