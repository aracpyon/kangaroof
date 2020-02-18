//has both container & presentation component
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login/login_form_container';
import SignupFormContainer from '../session/signup/signup_form_container';
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

function SessionModal(props){
  const { modal, closeModal } = props;
  

  // debugger
  if (!modal){
    return null;;
  }
  let component;
  switch (modal) {
    case 'login':
      component= <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }


  return (
    <div className="session-modal-background" onClick={closeModal}>
      <div className="session-modal-child" onClick={e => e.stopPropagation() }>
        
          {component}
        
      </div>
    </div>
  );
}

export default connect(mSTP, mDTP)(withRouter(SessionModal));