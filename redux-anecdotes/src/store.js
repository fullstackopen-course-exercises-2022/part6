import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
    reducer: {
        anecdote: anecdoteReducer,
        notification: notificationReducer,
        devTools: true
    }
})

export default store