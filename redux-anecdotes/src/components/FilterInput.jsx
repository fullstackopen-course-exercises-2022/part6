import React from 'react';
import { filterData } from '../reducers/filterReducer'
import {useDispatch} from 'react-redux'

const FilterInput = () => {
    const dispatch = useDispatch()
    const handleChange = (evt) => {
        dispatch(filterData(evt.target.value))
    }
    return (
        <div>
            <input type="search" onChange={handleChange} placeholder='Search for Anecdote' />
        </div>
    );
}

export default FilterInput;