//has both container & presentation component
import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login/login_form_container';
import SignupFormContainer from '../session/signup/signup_form_container';

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

function Modal({modal, closeModal}){
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
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation() }>
        
          {component}
        
      </div>
    </div>
  );
}

export default connect(mSTP, mDTP)(Modal);