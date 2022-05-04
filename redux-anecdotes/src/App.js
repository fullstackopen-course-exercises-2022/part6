import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Anecdotes from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdote)
  useEffect(() => {
      dispatch(initializeAnecdotes())
  }, [dispatch])
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes?.map(anecdote => (
        <Anecdotes anecdote={anecdote} key={anecdote.id} />
      ))}
      <h2>create new</h2>
      <Notification />
      <AnecdoteForm />
    </div>
  )
}

export default App