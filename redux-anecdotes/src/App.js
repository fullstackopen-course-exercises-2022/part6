import { useSelector } from 'react-redux'
import Anecdotes from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
  const anecdotes = useSelector(state => state.anecdote)
  console.log(anecdotes)
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes?.map(anecdote => (
        <Anecdotes anecdote={anecdote} />
      ))}
      <h2>create new</h2>
        <Notification />
      <AnecdoteForm />
    </div>
  )
}

export default App