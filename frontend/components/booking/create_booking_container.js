import { fetchBookings, fetchBooking, createBooking } from '../../actions/booking_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
// import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    spot: state.entities.spots[ownProps.spotId],
    booking: {
      startDate: null,
      endDate: null,
      num_guests: 1,
      adults: 1,
      children: 0,
      infants: 0,
      guest_id: state.session.id,
      spot_id: ownProps.spotId,
      focusedInput: START_DATE
    },
    formType: 'createBooking'
  }
  
};

const mDTP = (dispatch) => ({
  action: (booking) => dispatch(createBooking(booking)),
  closeModal: () => dispatch(closeModal())

})

export default connect(mSTP, mDTP)(BookingForm);
