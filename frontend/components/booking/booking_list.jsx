import React from 'react';
import BookingListItem from './booking_list_item';

class BookingList extends React.Component {
  constructor(props){
    super(props);
    this.comparison = this.comparison.bind(this);
  }
  componentDidMount(){
    this.props.fetchBookings(this.props.user.id);
    // this.props.fetchSpots();
  }

  componentDidUpdate(prevProps){
    const { bookings } = this.props;

    if (this.comparison(bookings, prevProps.bookings)) {
      this.props.fetchBookings(this.props.user.id);
    }
  }

  comparison(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      // debugger
      return true
    } else {
      arr1.map(el1 => {
        // debugger
        arr2.map(el2 => {
          if (el1 !== el2) {
            // debugger
            return true
          }
        })
      })
      return false;
    }
  }

  render(){
    const { bookings, spots, destroyBooking, user } = this.props;
    const yesNobookings = bookings.length > 0 ? (
      <div className="booking-items-container">
        {
        bookings.map(booking => {
          return <BookingListItem booking={booking} key={booking.id} spots={spots} user={user} destroyBooking={destroyBooking} />
        })
        }
      </div>
    ) : (
      <div className="no-booking-container">
        <p className="no-booking-comment">you don't have anything coming up--start exploring idead for your next trip</p>
        <div>
          <img className="travel" src={window.travel} />
        </div>
      </div>
          
    )

    
      return (
        <div className="booking-list">
          <div className="booking-list-container">
            <div className="booking-list-head">
            <h2 className="line1">Your Kangaroo Pouches</h2>
            <h3 className="line2">what's coming up</h3>
          </div>
          
          {yesNobookings}
          </div>
          
          
        </div>
      )
    
  }
}

export default BookingList;