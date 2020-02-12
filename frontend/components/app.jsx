import React from "react";
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import GreetingContainer from './nav/greeting_container';
import LoginFormContainer from './session/login/login_form_container';
import SignupFormContainer from './session/signup/signup_form_container';
import MainPage from '../components/main/main_page';
import Modal from "./modal/modal"

const App = () => (
  <div>
    <Modal />
    <GreetingContainer />
    <MainPage />
    {/* <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} /> */}
  </div>
);

export default App;