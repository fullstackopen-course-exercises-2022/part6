import React from 'react'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    const handleCreateAnecdote = async (evt) => {
        evt.preventDefault()
        const text = evt.target.anecdote.value
        evt.target.anecdote.value = ''
        props.createNewAnecdote(text)
        props.notification(`Added ${text} to list!,`, 5000)
    }
    return (
        <div>
          <form onSubmit={handleCreateAnecdote}>
            <div><input type="text" name="anecdote" placeholder="New Anecdote" /></div><br />
            <button type="submit">Create</button>
          </form>
        </div>
    );
}

const connectAnecdoteForm = connect(null, { createNewAnecdote, notification })(AnecdoteForm)

export default connectAnecdoteForm