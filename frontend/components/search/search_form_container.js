// import { fetchSearchResult } from '../../actions/spot_actions';
// import SearchForm from './search_form';
// import { connect } from 'react-redux';
// import { START_DATE, END_DATE } from 'react-dates/src/constants';


// const mSTP = (state, ownProps) => {
//   // debugger
//   return {
//     spot: state.entities.spots[ownProps.spotId],
//     search: {
//       startDate: null,
//       endDate: null,
//       num_guests: 1,
//       adults: 1,
//       children: 0,
//       infants: 0,
//       guest_id: state.session.id,
//       spot_id: ownProps.spotId,
//       focusedInput: START_DATE,
//       open: false,
//       error: ""
//       // showClearDates: false
//     }
//   }

// };

// const mDTP = (dispatch) => ({
//   fetchSearchResult: (keyword) => dispatch(fetchSearchResult(keyword))

// })

// export default connect(mSTP, mDTP)(SearchForm);