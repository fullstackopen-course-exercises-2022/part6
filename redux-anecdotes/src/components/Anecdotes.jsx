import React from 'react';
import { voteAnecdotes } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const Anecdotes = (anecdote) => {
    const dispatch = useDispatch()
    return (
        <div key={anecdote?.anecdote?.id}>
            <div>
                {anecdote?.anecdote?.content}
            </div>
            <div>
                has {anecdote?.anecdote?.votes}{' '}
                <button onClick={() => dispatch(voteAnecdotes(anecdote?.anecdote))}>vote</button>
            </div>
        </div>
    );
}

export default Anecdotes;