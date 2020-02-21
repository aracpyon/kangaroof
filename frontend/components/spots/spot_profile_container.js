import { fetchSpot, createSpot, updateSpot } from '../../actions/spot_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SpotProfile from './spot_profile';

const mSTP = (state, ownProps) => {
  const spot = state.entities.spots[ownProps.match.params.spotId]

  return {
    spot: spot,
    reviews: Object.values(state.entities.reviews),
    authors: state.entities.users
  
  }
}

const mDTP = dispatch => {
  
  return {
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    createSpot: spot => dispatch(createSpot(spot)),
    updateSpot: spot => dispatch(updateSpot(spot)),
    openModal: () => dispatch(openModal('createBooking')),
    closeModal: () => dispatch(closeModal()) 
  }
}

export default connect(mSTP, mDTP)(SpotProfile);