import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './util/session_api_util';
import { createReview,fetchSpots, fetchSpot, createSpot, updateSpot, fetchSearchResult } from "./actions/spot_actions";
import { fetchBookings, fetchBooking, createBooking, updateBooking, destroyBooking } from './actions/booking_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const store = configureStore();

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.fetchSpots = fetchSpots;
  // window.fetchSpot = fetchSpot;
  // window.createSpot = createSpot;
  // window.updateSpot = updateSpot;

  window.fetchBookings = fetchBookings;
  window.fetchBooking = fetchBooking;
  window.createBooking = createBooking;
  window.updateBooking = updateBooking;
  window.destroyBooking = destroyBooking;
  window.fetchSearchResult = fetchSearchResult;

  window.createReview = createReview;
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
})