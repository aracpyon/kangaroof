import * as APIUtil from "../util/spot_api_util";

export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';

const receiveAllSpots = spots => ({
  type: RECEIVE_ALL_SPOTS,
  spots
});

const receiveSpot = spot => ({
  type: RECEIVE_SPOT,
  spot
});

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

