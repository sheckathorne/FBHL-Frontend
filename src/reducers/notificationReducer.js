import { createSlice } from '@reduxjs/toolkit'

const initialState = { type: null, text: null, scope: null }

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification(state, action) {
      console.log('cleared')
      return initialState
    }
  },
})

export const { setNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer