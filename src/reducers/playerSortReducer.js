import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  field: 'skpoints',
  descending: true,
  alpha: false,
  reversed: false,
  secondaryFieldName: 'skGamesPlayed',
  secondaryReversed: true
}

const playerSortSlice = createSlice({
  name: 'sortField',
  initialState,
  reducers: {
    setSortField(_state, action) {
      return action.payload
    },
  },
})

export const { setSortField } = playerSortSlice.actions

export default playerSortSlice.reducer