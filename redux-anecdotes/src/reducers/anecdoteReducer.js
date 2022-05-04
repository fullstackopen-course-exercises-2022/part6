import { createSlice } from '@reduxjs/toolkit'
import AnecdotesService from '../services/anecdotes'

const initialState = []

export const initializeAnecdotes = () => async (dispatch) => {
  try {
    const response = await AnecdotesService.getAll()
    dispatch(setAnecdote(response))
  } catch(err) {
    console.log(err)
  }
}

export const createNewAnecdote = (text) => async (dispatch) => {
  try {
    const newAnecdote = await AnecdotesService.create(text)
    dispatch(appendAnecdote(newAnecdote))
  } catch(err) {
    console.log(err)
  }
}

export const voteAnecdotes = (anecdote) => async (dispatch) => {
  try {
    const voteData = await AnecdotesService.vote({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch(voteAnecdote(voteData))
  } catch(err) {
    console.log(err)
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const anecdote = action.payload
      state.push(anecdote)
    },
    voteAnecdote(state, action) {
      return state.map(anecdote =>
        anecdote.id === action.data ? { ...anecdote, votes : anecdote.votes + 1 } : anecdote
      )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      console.log(action)
      return action.payload
    }
  }
})

export const { createAnecdote, voteAnecdote, appendAnecdote, setAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer