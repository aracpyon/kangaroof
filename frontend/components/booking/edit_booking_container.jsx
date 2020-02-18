import { fetchBooking, updateBooking } from '../../actions/booking_actions';
import { connect } from 'react-redux';
import BookingForm from './booking_form';

class EditBooking extends React.Content {
  componentDidMount(){
    this.props.fetchBooking(this.props.match.params.bookingId);
  }
  render(){
    const { booking, formType, action } = this.props;
    return (
      <BookingForm 
        action={action} 
        formType={formType}
        booking={booking}
      />
    )
  }

}

const mSTP = (state, ownProps) => ({
  booking: state.bookings[ownProps.match.params.bookingId],
  formType: 'update'
})

const mDTP = (dispatch) => ({
  action: (booking) => dispatch(updateBooking(booking)),
  fetchBooking: bookingId => dispatch(fetchBooking(bookingId))
})

export default connect(mSTP, mDTP)(EditBooking);
