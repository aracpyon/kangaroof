import React from 'react';
import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup } from "../../../actions/session_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button className="session-button" onClick={() => dispatch(openModal('login'))}>
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);