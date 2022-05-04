import React from 'react';
import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleCreateAnecdote = async (evt) => {
        evt.preventDefault()
        const text = evt.target.anecdote.value
        evt.target.anecdote.value = ''
        dispatch(createNewAnecdote(text))
        dispatch(notification(`Added ${text} to list!,`, 5000))
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

export default AnecdoteForm;