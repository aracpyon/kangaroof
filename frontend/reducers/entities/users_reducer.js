import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_REVIEW, RECEIVE_SPOT } from '../../actions/spot_actions'
//create users(signup)
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_REVIEW:
      
      return Object.assign({}, state, { [action.author.id]: action.author });
    case RECEIVE_SPOT:
      
      return Object.assign({}, state, action.authors);
    default:
      return state;
  }
}

export default usersReducer;