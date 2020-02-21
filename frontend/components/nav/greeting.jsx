import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router';
import SearchBarForm from '../search/search_bar_form';

class Greeting extends React.Component {
  constructor (props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
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
    handleClick(){
      this.props.logout().then(this.props.history.push('/'));
    }

  render (){
    const { currentUser, logout, openModal } = this.props;

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
        <div className="nav-contents-div"><Link className="nav-contents" to={`/${currentUser.id}/bookings`}><div className="nav-buttons">My Trips</div></Link></div>
        <div className="nav-contents-div"><div className="nav-contents"><div className="nav-buttons">Messages</div></div></div>
        <div className="nav-contents-div"><div className="nav-contents" onClick={this.handleClick}><div className="nav-buttons">Log out</div></div></div >
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
        <SearchBarForm />
      </div>
      <div className="nav-right">
        {render}  
      </div>
    </div>
  )
  }
}

export default withRouter(Greeting);