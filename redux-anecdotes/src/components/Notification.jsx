import { useSelector } from 'react-redux'
import {notification} from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const Notification = (props) => {
  // const message = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if(props.notification === null) {
    return null
  }
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const connectNotification = connect(mapStateToProps)(Notification)

export default connectNotification