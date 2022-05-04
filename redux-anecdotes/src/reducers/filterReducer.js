const initialState = ''

const filterReducer = (state = initialState, action) => {
    const { type, data } = action
    switch(type) {
        case 'FILTER': {
            return data.filter
        }
        default: return state
    }
}

export const filterData = (filter) => {
    return {
        type: 'FILTER',
        data: {
            filter
        }
    }
}

export default filterReducer