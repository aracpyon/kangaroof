import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
      //we need type to dynamically create keys 
      //right now we have 'username' and 'password' from forms
      //and we are saving those information into state;
    };
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
    this.setState({
      email: "",
      name: "",
      password: ""
    });
    //clearing login information
  }

  renderErrors() {
    if (this.props.errors.length > 0){
      //empty [] or undefined does not work 
      return (
      <div className="session-errors">
          {this.props.errors.map((error, i) => (
            <p className="session-errors-content" key={`error-${i}`}>
              {error}
            </p>
          ))}
      </div>
    )
    }else {
      return null;
    }
    
  }

  render() {
    // debugger
    return (
     <div className="session-container">
      <header className="session-head">
        <div className="session-welcome">Sign up</div> 
        <div className="close-x" onClick={this.props.closeModal} >X</div>
      </header>
        <div className="session-form" >
          <form onSubmit={this.handleSubmit} className="signup-form">
            {this.renderErrors()}
            <div className="input-border">
              
              <input
                className="session-input"
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                placeholder="email" />
          
            </div>
          <br />
            <div className="input-border" >
            <input
                className="session-input"
                type="text"
                value={this.state.name}
                onChange={this.handleInput('name')}
                placeholder="name"
                />
          </div>
          <br />
            <div className="input-border">
            <input
                className="session-input"
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                placeholder="password" />
          
          </div>
          <br />
          <button className="session-submit" type="submit" >Sign Up</button>
          <div className="session-bottom">
            <div className="session-change">
              <div className="session-change-question">Already have an account?</div>
              <div className="session-change-button">{this.props.otherForm}</div>
            </div>
          </div>
        </form>
        </div>
     </div>
    )
    
  }
}

export default SignupForm;