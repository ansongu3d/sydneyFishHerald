import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import topicReducer from '../features/topics/topicSlice'
import noteReducer from '../features/notes/noteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    topics: topicReducer,
    notes: noteReducer,
  },
})
