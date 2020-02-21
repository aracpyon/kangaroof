import React from 'react';
import { withRouter } from 'react-router';

class BookingListItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.dateFilter = this.dateFilter.bind(this);
    // debugger
  }



  handleClick(){
    // debugger
    const spotId = this.props.booking.spot_id;
    this.props.history.push(`/spots/${spotId}`);
  }

  dateFilter(isoDate){
      const date = isoDate.slice(0, 10);
      const dateArr = date.split("-");
      dateArr.push(dateArr.shift());
      return dateArr.join(".")


  }
  handleDelete(){
    this.props.destroyBooking(this.props.booking.id);
    this.props.history.push(`/${this.props.user.id}/bookings`);
    
  }

  render(){

    
    const { booking, spots } = this.props;
    const spot = spots[booking.spot_id];
    // debugger
    
    const { start_date, end_date } = this.props.booking;
    // const printStartDate = `${start_date.}`
    // debugger
    return (
      <div className="booking-item-content" >
        <div className="booking-date-title">
          <h2 className="booking-date">
            <span className="from" >from</span>
            {this.dateFilter(start_date)}
            <span className="to" >to</span>
            {this.dateFilter(end_date)}
          </h2>
          <h3>{spot.city}</h3>
          <h3>{spot.title}</h3>
          <button onClick={this.handleDelete}>cancel</button>
        </div>
        <div className="booking-item-photo">
          <img className="booking-image" src={spot.photoUrls[1]} onClick={this.handleClick}/>
        </div>
      </div>
    )
    
    
  }
}

export default withRouter(BookingListItem);