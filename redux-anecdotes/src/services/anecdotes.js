import axios from 'axios'

const getAll = async () => {
    const response = await axios.get('http://localhost:3001/anecdotes')
    return response.data
}

const create = async (content) => {
    const formData = {
        content: content,
        votes: 0
    }
    const response = await axios.post('http://localhost:3001/anecdotes', formData)
    return response.data
}

const AnecdotesService = {
    getAll,
    create
}

export default AnecdotesService