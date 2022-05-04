import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {notification} from '../reducers/notificationReducer'
import AnecdotesService from "../services/anecdotes";

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleCreateAnecdote = async (evt) => {
        evt.preventDefault()
        const text = evt.target.anecdote.value
        evt.target.anecdote.value = ''
        const newAnecdote = await AnecdotesService.create(text)
        dispatch(createAnecdote(newAnecdote))
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