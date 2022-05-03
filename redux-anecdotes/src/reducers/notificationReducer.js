const initialState = null

const notificationReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'SET_MESSAGE':
      return action.message
    case 'REMOVE_MESSAGE':
      return action.message
    default: return state
  }
}

export const notification = (message, time) => async (dispatch) => {
  dispatch({
    type: 'SET_MESSAGE',
    message,
  })

  setTimeout(() => {
    dispatch({
      type: 'REMOVE_MESSAGE',
      message: null
    })
  }, time)
}

export default notificationReducer