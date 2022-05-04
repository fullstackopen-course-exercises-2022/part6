import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Anecdotes from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import FilterInput from './components/FilterInput'

const App = () => {
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeAnecdotes())
    }, [dispatch])

  const anecdotes = useSelector((state) => {
      const anecdotes = state.anecdote
      const filter = state.filter
      if(filter === '') {
          return anecdotes
      }
      return anecdotes.filter(anecdote => anecdote?.content?.toLowerCase()?.indexOf(filter.toLowerCase()) > -1)
  })
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes?.map(anecdote => (
        <Anecdotes anecdote={anecdote} key={anecdote?.id} />
      ))}
      <h2>create new</h2>
      <Notification />
      <AnecdoteForm /><br/>
      <FilterInput />
    </div>
  )
}

export default App