import { Link } from 'react-router-dom';
import React from 'react';

export default ({ currentUser, logout, openModal }) => {
  //received "currentUser" and "logout" as props from its container
  // debugger
  //            if currentUser exists
  // const sessionLinks = () => (
  //   <nav className="nav_buttons">
  //     <button className="nav-contents" onClick={() => openModal('signup')}>Sign up</button>
  //     <button className="nav-contents" onClick={() => openModal('login')}>Log In</button>
  //   </nav>
  // )

  // const greeting = () => (
  //   <div className="greetings">
  //     <p>Hello, {currentUser.name}</p>
  //     <button onClick={logout}>Log out</button>
  //   </div>
  // )

  const noCurrentUser = () => (
    <nav className = "nav-left-contents" >
      <Link className="nav-contents" to="/spots" >Spots</Link>
      <a className="nav-contents" href="https://github.com/aracpyon">gitHub</a>
      <div className="nav-contents" onClick={() => openModal('signup')}>Sign up</div>
      <div className="nav-contents" onClick={() => openModal('login')}>Log In</div>
    </nav >
  )

  const yesCurrentUser = () => (
    <nav className="nav-left-contents" >
      <div className="nav-contents">Trips</div>
      <div className="nav-contents">Messages</div>
      <button className="nav-contents" onClick={logout}>Log out</button>
    </nav >
  )

  // const session = currentUser ?
  //   greeting(currentUser, logout) :
  //   sessionLinks()

    const render = currentUser ?
    yesCurrentUser(logout) :
    noCurrentUser()

  return (
    <div className="nav-bar">
      {/* <div className="main-page-image">

      </div> */}
      <Link className="nav-right" to="/"><img className="logo" src={window.logoURL} /></Link>
      <div className="nav-right">
        <input type="text" value="Try Paris"/>
      </div>
      <div className="nav-left">
        {render}  

      </div>
    
    </div>
  )
}