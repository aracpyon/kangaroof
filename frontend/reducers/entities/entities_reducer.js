import usersReducer from './users_reducer';
import spotsReducer from './spots_reducer';
import { combineReducers } from "redux";


export default combineReducers({
  users: usersReducer,
  spots: spotsReducer
});


