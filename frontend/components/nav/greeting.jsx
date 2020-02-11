import { Link } from 'react-router-dom';
import React from 'react';

export default ({ currentUser, logout }) => {
  //received "currentUser" and "logout" as props from its container

  //            if currentUser exists
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.name}</p>
      <button onClick={logout}>Log out</button>
    </div>
  ) : (
      <div>
        <Link className="button" to="/signup">Sign up</Link>
        <Link className="button" to="/login">Log In</Link>
      </div>
    )
  return (
    <div>
      {display}
    </div>
  )
}