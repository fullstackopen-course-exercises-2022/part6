import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import reducer, { setAnecdote } from './reducers/anecdoteReducer'
import store from './store'
import AnecdotesService from './services/anecdotes'

AnecdotesService.getAll().then(response => store.dispatch(setAnecdote(response)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
