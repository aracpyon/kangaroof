import React from 'react';
import BookingListItem from './booking_list_item';

class BookingList extends React.Component {
  constructor(props){
    super(props);
    // debugger;
  }
  componentDidMount(){
    this.props.fetchBookings(this.props.user.id);
    // this.props.fetchSpots();
  }

  render(){
    const { bookings, spots } = this.props;
    const yesNobookings = bookings && spots ? (
      <div className="booking-items-container">
        {
        bookings.map(booking => {
          return <BookingListItem booking={booking} key={booking.id} spots={spots} />
        })
        }
      </div>
    ) : (
      <div className="no-booking-container">
        <p>you don't have anything coming up--start exploring idead for your next trip</p>
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