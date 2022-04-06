import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  matchActivePage: 1,
  playersActivePage: 1,
  teamsActivePage: 1,
  playerStandingsPage: 1,
  conferencePage: 1,
  divisionPage: 1,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setMatchActivePage(state, action) {
      return { ...state, matchActivePage: action.payload }
    },
    setPlayersActivePage(state, action) {
      return { ...state, playersActivePage: action.payload }
    },
    setTeamsActivePage(state, action) {
      return { ...state, teamsActivePage: action.payload }
    },
    setPlayerStandingsPage(state, action) {
      return { ...state, playerStandingsPage: action.payload }
    },
    setConferencePage(state, action) {
      return { ...state, conferencePage: action.payload }
    },
    setDivisionPage(state, action) {
      return { ...state, divisionPage: action.payload }
    },
    resetPagination(_state, _action) {
      return initialState
    }
  },
})

export const { 
  setMatchActivePage,
  setPlayerStandingsPage,
  setPlayersActivePage,
  setTeamsActivePage,
  resetPagination,
  setConferencePage,
  setDivisionPage
} = paginationSlice.actions

export default paginationSlice.reducer