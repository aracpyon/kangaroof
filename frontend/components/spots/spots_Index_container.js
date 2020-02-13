import { fetchSpots, fetchSpot, createSpot, updateSpot } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import SpotsIndex from './spots_index';

const mSTP = ({entities}) => {
  // debugger
  return {
    spots: Object.values(entities.spots)
  }
}

const mDTP = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    createSpot: spot => dispatch(createSpot(spot)),
    updateSpot: spot => dispatch(updateSpot(spot))
  }
}

export default connect(mSTP, mDTP)(SpotsIndex);