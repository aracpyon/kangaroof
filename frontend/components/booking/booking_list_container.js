import { connect} from 'react-redux';
import BookingList from './booking_list';
import { fetchBookings } from '../../actions/booking_actions'

const mSTP = state => {
  return {
    user: state.entities.users[state.session.id],
    bookings: {}
  }
}

const mDTP = dispatch => {
  return {
    fetchBookings: (currentuserId) => dispatch(fetchBookings(currentuserId)) 
  }
}

export default connect(mSTP, mDTP)(BookingList);