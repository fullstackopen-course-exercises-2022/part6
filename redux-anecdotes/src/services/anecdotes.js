import axios from 'axios'

const create = async (content) => {
    const formData = {
        content: content,
        votes: 0
    }
    const response = await axios.post('http://localhost:3001/anecdotes', formData)
    return response.data
}

const getAll = async () => {
    const response = await axios.get('http://localhost:3001/anecdotes')
    return response.data
}

const vote = async (anecdote) => {
    const response = await axios.put(`http://localhost:3001/anecdotes/${anecdote.id}`, anecdote)
    return response.data
}

const AnecdotesService = {
    create,
    getAll,
    vote
}

export default AnecdotesService