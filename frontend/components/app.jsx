import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
// import 'react-dates/initialize';


import GreetingContainer from './nav/greeting_container';
import LoginFormContainer from './session/login/login_form_container';
import SignupFormContainer from './session/signup/signup_form_container';
import SpotsIndexContainer from './spots/spots_Index_container'
import MainPage from '../components/main/main_page';
import SessionModal from "./modal/session_modal";
import BookingModal from './modal/booking_modal';
import SpotProfileContainer from "./spots/spot_profile_container";
// import EditBookingContainer from "./booking/edit_booking_container";

const App = () => (
  <div>
    <SessionModal />
    <BookingModal />
    <GreetingContainer />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path={`/spots/:spotId`} component={SpotProfileContainer} />
      <Route exact path="/spots" component={SpotsIndexContainer}/>
      {/* <Route path="/bookings/:bookingId" component={EditBookingContainer} /> */}
    </Switch>
    {/* <MainPage /> */}
    
  </div>
);

export default App;