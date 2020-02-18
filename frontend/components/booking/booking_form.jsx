// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// const reactDates = require('react-dates/initialize');
// import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import { START_DATE, END_DATE } from 'react-dates/src/constants';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './date-picker.css';


class BookingForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.booking;
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDate(date){
    if (date) {
      const dateStr = date.toISOString().slice(0, 10);
      const dateArr = dateStr.split("-");
      dateArr.push(dateArr.shift());

      return dateArr.join("/");
    }else{
      return "";
    }

    // this.state.startDate ? this.state.startDate.toISOString() : ""
  }

  dateTransform(date){
    //date = "02/10/2020"
    const splited = date.split("/");
    splited.unshift(splited.pop());
    return splited.join("");
  }
  handleInput(type){
    // type = {startDate: "02/10/2020",
    //         endDate: "02/20/2020",
  //           num_guests: 3 }
    // if (this.state[type] === null){
    //   return e => this.setState({[type]: this.dateTransform(e.target.value)})
    // }else{
    //   return this.state;
    // }
    debugger
    return e => {
      if (this.state[type] === null) {
        debugger
      return this.setState({[type]: this.dateTransform(e.target.value)})
    }else{
      debugger
      return this.state;
      }
    }
  }

  
  handleSubmit(e){
    debugger
    e.preventDefault();
    const { startDate, endDate, num_guests, guest_id, spot_id } = this.state;
    const newBooking = Object.assign(
                        {}, 
                        { start_date: startDate.toISOString(),
                          end_date: endDate.toISOString(),
                          num_guests: num_guests,
                          spot_id: spot_id,
                          guest_id: guest_id
                        }
                        );
    debugger
    this.props.action(newBooking);
  }                    
  
  render(){
    const { photoUrls, title, price } = this.props.spot;
    const { num_guests, adults, children, infants } = this.state;

    return (
      <div className="booking-container">
        <form className="booking-form" onSubmit={this.handleSubmit}>
          <div className="booking-top">
            <div className="booking-close-x" onClick={this.props.closeModal}>X</div>
          </div>

          <div className='booking-middle'>
            <div className="booking-left">
              <div className="booking-calendar">
                <DayPickerRangeController
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onDatesChange={({startDate, endDate}) => {
                    debugger
                    return this.setState({startDate, endDate})}}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput => {
                    debugger
                    return this.setState({ focusedInput })}}
                  numberOfMonths={2}
                  hideKeyboardShortcutsPanel={true}
                  showClearDates={true}
                  // isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                  // isDayBlocked={day => this.dayBlocked(day)}
                
                />
                
              </div>
            </div>

            <div className="booking-right">

              <div className="head">
                <div className="thumb-title">
                  <img className="thumbnail" src={photoUrls[1]} alt="" />
                  <h2 className="spot-title">{title}</h2>
                </div>
                <div className="comment" >Add your travel dates for exact pricing</div>
              </div>

              <div className="checkinout-border">
                <div className="checkin">
                  <input 
                    className="date-input"
                    type="text" 
                    value={this.handleDate(this.state.startDate)}
                    // onChange={this.handleInput('startDate')}
                    placeholder="MM/DD/YYYY" 
                    required
                    // readOnly
                  />
                  <label className="date-label">Check-in</label>
                </div>
                <div className="checkout">
                  <input 
                    className="date-input"
                    type="text" 
                    value={this.handleDate(this.state.endDate)} 
                    // onChange={this.handleInput('endDate')}
                    placeholder="MM/DD/YYYY"
                    required
                    // readOnly
                  />
                  <label className="date-label">Check-out</label>
                </div>
              </div>

              <div className="num-guests-border">
                <label className="guest-label">Guests</label>
                <div>
                  <input className="num-guests" placeholder={`${num_guests} guests`} readonly/>
                  <button className="down-button">
                    <img className="down" src={window.down} alt="" width="16" height="16"/>
                  </button>
                </div>
                <div className="dropdown">
                  <div className="people1">
                    <span className="person">Adults</span>
                    <div>
                      <img className="minus" src={window.minus} width="22" height="22"/>
                      <div>{adults}</div>
                      <img className="plus" src={window.plus} width="22" height="22"/>
                    </div>
                  </div>
                  <div className="people2">
                    <span className="person">Children</span>
                    <div>
                      <img className="minus" src={window.minus} width="22" height="22"/>
                      <div>{children}</div>
                      <img className="plus" src={window.plus} width="22" height="22"/>
                    </div>
                  </div>
                  <div className="people3">
                    <span className="person">Infants</span>
                    <div>
                      <img className="minus" src={window.minus} width="22" height="22"/>
                      <div>{infants}</div>
                      <img className="plus" src={window.plus} width="22" height="22"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-bottom">
            
              <div className="booking-price">
                <span>${price}</span>
                /night
              </div>
              <button className="submit" type="submit">Save</button>

          </div>
    
        </form>
      </div>
    )
  }
}

export default BookingForm;