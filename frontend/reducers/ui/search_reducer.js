import { SEND_SEARCH_FORM } from '../../actions/search_actions';
// import { RECEIVE_REVIEW } from '../../actions/spot_actions';

const searchReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type){
    case SEND_SEARCH_FORM:
      return action.form
    default:
      return state;
  }
}

export default searchReducer;
