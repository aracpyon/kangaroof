import usersReducer from './users_reducer';
import spotsReducer from './spots_reducer';
import bookingsReducer from './bookings_reducer';
import { combineReducers } from "redux";


export default combineReducers({
  users: usersReducer,
  spots: spotsReducer,
  bookings: bookingsReducer
});


