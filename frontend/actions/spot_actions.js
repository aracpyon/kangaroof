import * as APIUtil from "../util/spot_api_util";

export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveAllSpots = spots => ({
  type: RECEIVE_ALL_SPOTS,
  spots
});

const receiveSpot = ({ spot, reviews, authors }) => ({
  type: RECEIVE_SPOT,
  spot,
  reviews,
  authors
});

const receiveSearchResult = result => ({
  type: RECEIVE_SEARCH_RESULT,
  result
});

const receiveReview = ({review, average_rating, author }) => {
  // debugger
  return {
    type: RECEIVE_REVIEW,
    review,
    average_rating,
    author
  }
};

//thunk

export const fetchSpots = () => dispatch => {
  return APIUtil.fetchSpots().then(spots => {
    // debugger
    return dispatch(receiveAllSpots(spots))}
    )
};

export const fetchSpot = spotId => dispatch => {
  // debugger
  return APIUtil.fetchSpot(spotId).then(spot => {
    dispatch(receiveSpot(spot))})
}

export const createSpot = spot => dispatch => {
  // debugger
  return APIUtil.createSpot(spot).then(spot => dispatch(receiveSpot(spot)))
};

export const updateSpot = spot => dispatch => {
  return APIUtil.updateSpot(spot).then(spot => dispatch(receiveSpot(spot)))
};

export const fetchSearchResult = keyword => dispatch => {
  return APIUtil.fetchSearchResult(keyword).then(result => dispatch(receiveSearchResult(result)))
};

export const createReview = review => dispatch => {
  debugger
  return APIUtil.createReview(review).then(review => dispatch(receiveReview(review)))
};
