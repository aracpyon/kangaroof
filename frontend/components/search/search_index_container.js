import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { fetchSearchResult } from '../../actions/spot_actions';

const mSTP = (state) => {
  // debugger
  return {
    searchForm: state.ui.search,
    spots: Object.values(state.entities.spots)
  }
}

const mDTP = dispatch => {
  // debugger
  return {
    fetchSearchResult: (keyword) => dispatch(fetchSearchResult(keyword))
  }
}

export default connect(mSTP, mDTP)(SearchIndex);