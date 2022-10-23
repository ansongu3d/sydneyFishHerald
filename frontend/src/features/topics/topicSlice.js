import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import topicService from './topicService'
// NOTE: use a extractErrorMessage function to save some repetition
import { extractErrorMessage } from '../../utils'

// NOTE: no need for isLoading, isSuccess, isError or message as we can leverage
// our AsyncThunkAction and get Promise reolved or rejected messages at
// component level
const initialState = {
  topics: null,
  topic: null,
}

// Create new topic
export const createTopic = createAsyncThunk(
  'topics/create',
  async (topicData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await topicService.createTopic(topicData, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Get user topics
export const getTopics = createAsyncThunk(
  'topics/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await topicService.getTopics(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Get user topic
export const getTopic = createAsyncThunk(
  'topics/get',
  async (topicId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await topicService.getTopic(topicId, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Close topic
export const closeTopic = createAsyncThunk(
  'topics/close',
  async (topicId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await topicService.closeTopic(topicId, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// NOTE: removed loading, isSuccess state as it can be infered from presence or
// absence of topics for simpler state management with no need for a reset
// function

export const topicSlice = createSlice({
  name: 'topic',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTopics.pending, (state) => {
        // NOTE: clear single topic on topics page, this replaces need for
        // loading state on individual topic
        state.topic = null
      })
      .addCase(getTopics.fulfilled, (state, action) => {
        state.topics = action.payload
      })
      .addCase(getTopic.fulfilled, (state, action) => {
        state.topic = action.payload
      })
      .addCase(closeTopic.fulfilled, (state, action) => {
        state.topic = action.payload
        state.topics = state.topics.map((topic) =>
          topic._id === action.payload._id ? action.payload : topic
        )
      })
  },
})

export default topicSlice.reducer
