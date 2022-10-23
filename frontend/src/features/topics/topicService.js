import axios from 'axios'

const API_URL = '/api/topics/'

// Create new topic
const createTopic = async (topicData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  // const fd = new FormData();
  //   fd.append('file',topicData.fishImage,topicData.fishImageName)
  //   const payload = {...fd,...topicData}
  console.log(topicData)
  
  const response = await axios.post(API_URL, topicData, config)

  return response.data
}

// Get user topics
const getTopics = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Get user topic
const getTopic = async (topicId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + topicId, config)

  return response.data
}

// Close topic
const closeTopic = async (topicId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(
    API_URL + topicId,
    { status: 'closed' },
    config
  )

  return response.data
}

const topicService = {
  createTopic,
  getTopics,
  getTopic,
  closeTopic,
}

export default topicService
