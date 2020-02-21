import { SEND_SEARCH_FORM } from '../../actions/search_actions';

const searchReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type){
    case SEND_SEARCH_FORM:
      // debugger
      return action.form
    default:
      return state;
  }
}

export default searchReducer;
