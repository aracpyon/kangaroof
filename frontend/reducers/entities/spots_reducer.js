import { RECEIVE_REVIEW, RECEIVE_ALL_SPOTS, RECEIVE_SPOT, RECEIVE_SEARCH_RESULT } from "../../actions/spot_actions";
import { RECEIVE_ALL_BOOKINGS } from "../../actions/booking_actions";


const spotsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_SPOTS:
      // debugger
      return action.spots;
    case RECEIVE_ALL_BOOKINGS:
      return action.spots;
    case RECEIVE_SPOT:
      return Object.assign({}, state, {[action.spot.id]: action.spot });
    case RECEIVE_SEARCH_RESULT:
      return action.result;
    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      const newState = Object.assign({}, state);
      // debugger
      newState[review.spot_id].reviewIds.push(review.id);
      newState[review.spot_id].average_rating = average_rating;
      // debugger
      return newState;
    default:
      return state
  }
}

export default spotsReducer;