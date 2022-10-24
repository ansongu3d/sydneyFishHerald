const mongoose = require('mongoose')

const topicSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    catogory: {
      type: String,
      required: [true, 'Please select a catogory'],
      enum: ['Bait Fishing', 'Lure Fishing', 'Flying Fishing', 'Trolling Fishing'],
    },
    fishSize: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: [true, 'Please enter fish size'],
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
    fishImageName: {
      type: String,
      required: false,
    },
    fishImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', topicSchema)
