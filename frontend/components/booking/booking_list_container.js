import { connect} from 'react-redux';
import BookingList from './booking_list';
import { fetchBookings, destroyBooking, updateBooking } from '../../actions/booking_actions';
import { fetchSpots } from '../../actions/spot_actions';

const mSTP = state => {
  // debugger
  return {
    user: state.entities.users[state.session.id],
    bookings: Object.values(state.entities.bookings),
    spots: state.entities.spots
  }
}

const mDTP = dispatch => {
  // debugger
  return {
    fetchBookings: (currentuserId) => dispatch(fetchBookings(currentuserId)),
    fetchSpots: () => dispatch(fetchSpots())
  }
}

export default connect(mSTP, mDTP)(BookingList);