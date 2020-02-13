import React from 'react';
import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup, clearErrors } from "../../../actions/session_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <div className="session-button" onClick={() => dispatch(openModal('login'))}>
      Login
    </div>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);