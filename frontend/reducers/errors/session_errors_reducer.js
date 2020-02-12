import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../../actions/session_actions';
import { CLOSE_MODAL } from "../../actions/modal_actions"

const sessionErrorsReducer = (state = [], action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return [];
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;