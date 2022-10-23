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
      enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of the catch'],
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
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', topicSchema)
