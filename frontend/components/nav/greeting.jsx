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
    <nav className = "nav-right-contents" >
      <div className="nav-contents-div"><Link className="nav-contents" to="/spots" ><div className="nav-buttons">Spots</div></Link></div>
      <div className="nav-contents-div"><a className="nav-contents" href="https://github.com/aracpyon"><div className="nav-buttons">GitHub</div></a></div>
      <div className="nav-contents-div"><div className="nav-contents" onClick={() => openModal('signup')}><div className="nav-buttons">Sign up</div></div></div>
      <div className="nav-contents-div"><div className="nav-contents" onClick={() => openModal('login')}><div className="nav-buttons">Log In</div></div></div>
    </nav >
  )

  const yesCurrentUser = () => (
    <nav className="nav-right-contents" >
      <div className="nav-contents-div"><div className="nav-contents"><div className="nav-buttons">My Trip</div></div></div>
      <div className="nav-contents-div"><div className="nav-contents"><div className="nav-buttons">Messages</div></div></div>
      <div className="nav-contents-div"><div className="nav-contents" onClick={logout}><div className="nav-buttons">Log out</div></div></div >
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
      <div className="nav-left">
        <Link to="/"><img className="logo" src={window.logo2URL} /></Link>
        <div className="search">
          <div className="search-bar-container"> 
            {/* form */}

            <div className="search-bar-container2">
              <label className="search-contents">
                <div className="search-icon-container">
                  <img className="search-icon" src={window.search} height="20"/>
                </div>
                <div className="search-input-container">
                  <input className="search-input" type="text" placeholder="Try 'paris'" />
                </div>
              </label>
            </div>
            
          </div>
        </div>
      </div>
      <div className="nav-right">
        {render}  
      </div>
    </div>
  )
}