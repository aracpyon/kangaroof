import React from 'react';
import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login, clearErrors } from "../../../actions/session_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'login',
  demoUser: {
    email: "aracpyon@gmail.com",
    password: "ilovedogscats"
  }
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <div className="session-button" onClick={() => dispatch(openModal('signup'))}>
      Sign up
    </div>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);