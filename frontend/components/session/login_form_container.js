import { connect } from "react-redux";
import sessionForm from "./session_form";
import { login } from "../../actions/session_actions";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);