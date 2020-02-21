// import React from 'react';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// // import { START_DATE, END_DATE } from 'react-dates/src/constants';
// import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import './date-picker.css';

// class SearchForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = this.props.booking;
//     // debugger
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleFocus = this.handleFocus.bind(this);
//     this.handleBlur = this.handleBlur.bind(this);
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);

//     this.innerRef = React.createRef();
//     this.outerRef = React.createRef();
//   }

//   handleDate(date) {
//     if (date) {
//       const dateStr = date.toISOString().slice(0, 10);
//       const dateArr = dateStr.split("-");
//       dateArr.push(dateArr.shift());

//       return dateArr.join("/");
//     } else {
//       return "";
//     }

   
//   }

//   dateTransform(date) {
//     //date = "02/10/2020"
//     const splited = date.split("/");
//     splited.unshift(splited.pop());
//     return splited.join("");
//   }



//   handleSubmit(e) {
//     // debugger
//     e.preventDefault();
//     const { startDate, endDate, num_guests, guest_id, spot_id } = this.state;
//     const newSearch = Object.assign(
//       {},
//       {
//         start_date: startDate.toISOString(),
//         end_date: endDate.toISOString(),
//         num_guests: num_guests,
//         spot_id: spot_id,
//         guest_id: guest_id
//       }
//     );
//     // debugger
//     this.props.action(newSearch);
//   }

//   handleFocus(e) {
//     // debugger
//     if (this.innerRef.current !== e.target && !this.innerRef.current.contains(e.target)) {
//       if (this.state.open) {
//         // debugger
//         return this.setState({ open: false })

//       } else {
//         // debugger
//         return this.setState({ open: true })
//       }
//     }


//   }

  

//   handleBlur(ref, callback) {
//     // debugger 
//     return event => {
//       // debugger
//       const { relatedTarget } = event;
//       const node = ref.current;

//       if (node) {
//         // debugger
//         if (node !== relatedTarget && !node.contains(relatedTarget)) {
//           // debugger
//           callback();
//         }
//       } else {
//         console.log("node is null");
//       }


//     }
//   }

//   increment(type) {
//     // debugger
//     const val1 = this.state[type]
//     if (this.state[type] < 10) {
//       return this.setState({
//         error: "",
//         num_guests: this.state.num_guests + 1,
//         [type]: val1 + 1
//       })
//     } else {
//       return this.setState({ error: "maximum guests are 10 people" });
//     }

//   }

//   decrement(type) {
//     const val2 = this.state[type]
//     if (this.state.num_guests > 1) {
//       return this.setState({
//         error: "",
//         num_guests: this.state.num_guests - 1,
//         [type]: val2 - 1
//       })
//     } else {
//       return this.setState({ error: "we need at least one guest" });
//     }

//   }

//   renderError() {
//     if (this.state.error.length > 0) {
//       //empty [] or undefined does not work 
//       return (
//         <div className="guest-error">
//           <p className="guest-error-message" key="guest-error">
//             {this.state.error}
//           </p>
//         </div>
//       )
//     } else {
//       return null;
//     }

//   }

//   render() {
//     const { photoUrls, title, price } = this.props.spot;
//     const { num_guests, adults, children, infants, open } = this.state;

//     let dropdownFlag = open ? dropdownFlag = 'OPEN' : dropdownFlag = ''



//     return (
//       <div className="booking-container">
//         <form className="booking-form" onSubmit={this.handleSubmit}>
//           <div className="booking-top">
//             <div className="booking-close-x" onClick={this.props.closeModal}>X</div>
//           </div>

//           <div className='booking-middle'>
//             <div className="booking-left">
//               <div className="booking-calendar">
//                 <DayPickerRangeController
//                   startDate={this.state.startDate}
//                   endDate={this.state.endDate}
//                   onDatesChange={({ startDate, endDate }) => {
//                     // debugger
//                     return this.setState({ startDate, endDate })
//                   }}
//                   focusedInput={this.state.focusedInput}
//                   onFocusChange={focusedInput => {
//                     // debugger
//                     return this.setState({ focusedInput })
//                   }}
//                   numberOfMonths={2}
//                   hideKeyboardShortcutsPanel={true}
//                 // showClearDates={true}
//                 // isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
//                 // isDayBlocked={day => this.dayBlocked(day)}

//                 />

//               </div>
//             </div>

//             <div className="booking-right">

//               <div className="head">
//                 <div className="thumb-title">
//                   <img className="thumbnail" src={photoUrls[1]} alt="" />
//                   <h2 className="spot-title">{title}</h2>
//                 </div>
//                 <div className="comment" >Add your travel dates for exact pricing</div>
//               </div>

//               <div className="checkinout-border">
//                 <div className="checkin">
//                   <input
//                     className="date-input"
//                     type="text"
//                     value={this.handleDate(this.state.startDate)}
//                     // onChange={this.handleInput('startDate')}
//                     placeholder="MM/DD/YYYY"
//                     required
//                   // readOnly
//                   />
//                   <label className="date-label">Check-in</label>
//                 </div>
//                 <div className="checkout">
//                   <input
//                     className="date-input"
//                     type="text"
//                     value={this.handleDate(this.state.endDate)}
//                     // onChange={this.handleInput('endDate')}
//                     placeholder="MM/DD/YYYY"
//                     required
//                   // readOnly
//                   />
//                   <label className="date-label">Check-out</label>
//                 </div>
//               </div>

//               <div
//                 tabIndex="1"
//                 id="parent"
//                 ref={this.outerRef}
//                 className="num-guests-border"
//                 onClick={this.handleFocus}
//                 onBlur={this.handleBlur(this.outerRef, e =>
//                   this.setState({ open: false }))}
//               >
//                 <label className="guest-label">Guests</label>
//                 <div>
//                   <input className="num-guests" placeholder={`${num_guests} guests`} />

//                   <img className="down" src={window.down} alt="" width="16" height="16" />

//                 </div>
//                 <div
//                   ref={this.innerRef}
//                   className={`dropdown ${dropdownFlag}`}
//                   tabIndex="1"
//                   onBlur={this.handleBlur(this.innerRef, e =>
//                     this.setState({ open: false })
//                   )}
//                 >
//                   <div className="dropdown-contents">
//                     <div className="people">
//                       <span className="person">Adults</span>
//                       <div className="count">
//                         <img className="minus" src={window.minus} width="32" height="32"
//                           onClick={() => this.decrement('adults')}
//                         />
//                         <div className="num">{adults}</div>
//                         <img className="plus" src={window.plus} width="32" height="32"
//                           onClick={() => this.increment('adults')}
//                         />
//                       </div>
//                     </div>
//                     <div className="people">
//                       <span className="person">Children</span>
//                       <div className="count">
//                         <img className="minus" src={window.minus} width="32" height="32"
//                           onClick={() => this.decrement('children')}
//                         />
//                         <div className="num">{children}</div>
//                         <img className="plus" src={window.plus} width="32" height="32"
//                           onClick={() => this.increment('children')}
//                         />
//                       </div>
//                     </div>
//                     <div className="people">
//                       <span className="person">Infants</span>
//                       <div className="count">
//                         <img className="minus" src={window.minus} width="32" height="32"
//                           onClick={() => this.decrement('infants')}
//                         />
//                         <div className="num">{infants}</div>
//                         <img className="plus" src={window.plus} width="32" height="32"
//                           onClick={() => this.increment('infants')} />
//                       </div>
//                     </div>
//                     {this.renderError()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="booking-bottom">

//             <div className="booking-price">
//               <span>${price}</span>
//               /night
//               </div>
//             <button className="submit" type="submit">Save</button>

//           </div>

//         </form>
//       </div>
//     )
//   }
// }

// export default SearchForm;