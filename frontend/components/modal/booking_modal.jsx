import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { closeModal } from '../../actions/modal_actions';
import CreateBookingContainer from '../booking/create_booking_container'

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
}

function BookingModal(props) {
  // debugger
  const { modal, closeModal } = props;
  const pathname = props.location.pathname;
  const strInt = pathname.split('/').pop();
  const spotId = parseInt(strInt);
  

  // debugger
  if (!modal) {
    return null;;
  }
  let component;
  switch (modal) {
    case 'createBooking':
      component = <CreateBookingContainer spotId={spotId} />;
      break;
    default:
      return null;
  }


  return (
    <div className="booking-modal-background" onClick={closeModal}>
      <div className="booking-modal-child" onClick={e => e.stopPropagation()}>

        {component}

      </div>
    </div>
  );
}

export default connect(mSTP, mDTP)(withRouter(BookingModal));