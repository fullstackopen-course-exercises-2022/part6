import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {notification} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleCreateAnecdote = (evt) => {
        evt.preventDefault()
        const text = evt.target.anecdote.value
        evt.target.anecdote.value = ''
        dispatch(createAnecdote(text))
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