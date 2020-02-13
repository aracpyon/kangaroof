import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import GreetingContainer from './nav/greeting_container';
import LoginFormContainer from './session/login/login_form_container';
import SignupFormContainer from './session/signup/signup_form_container';
import SpotsIndexContainer from './spots/spots_Index_container'
import MainPage from '../components/main/main_page';
import Modal from "./modal/modal"
import SpotProfileContainer from "./spots/spot_profile_container";

const App = () => (
  <div>
    <Modal />
    <GreetingContainer />
    <Switch>
      <Route path={`/spots/:spotId`} component={SpotProfileContainer} />
      <Route exact path="/spots" component={SpotsIndexContainer}/>
      <Route exact path="/" component={MainPage} />
    </Switch>
    {/* <MainPage /> */}
    
  </div>
);

export default App;