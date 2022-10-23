import axios from 'axios'

const API_URL = '/api/topics/'

// Get topic notes
const getNotes = async (topicId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + topicId + '/notes', config)

  return response.data
}

// Create topic note
const createNote = async (noteText, topicId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(
    API_URL + topicId + '/notes',
    {
      text: noteText,
    },
    config
  )

  return response.data
}

const noteService = {
  getNotes,
  createNote,
}

export default noteService
