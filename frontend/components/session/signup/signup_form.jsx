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
    this.props.processForm(user).then(() => this.props.history.push('/'));
    // this.setState({
    //   email: "",
    //   name: "",
    //   password: ""
    // });
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

  // clearErrors(){
  //   return this.props.errors = [];
  // }

  render() {
    // debugger
    let errors;
    if (this.renderErrors() === null){
      errors = "";
    } else {
      errors = "errors"
    }

    return (
     <div className="session-container">
      <header className="session-head">
        <div className="session-welcome">Sign up</div> 
        <div className="close-x" onClick={this.props.closeModal} >X</div>
      </header>
        <div className="session-form" >
          <form onSubmit={this.handleSubmit} className="form-form">
            {this.renderErrors()}
            <div className={`input-border ${errors}`} >
              
              <input
                className="session-input"
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                required
                // placeholder="email" 
                />
              <label className="insession-label" for="email" >email</label>
            </div>
          <br />
            <div className={`input-border ${errors}`} >
            <input
                className="session-input"
                type="text"
                value={this.state.name}
                onChange={this.handleInput('name')}
                // placeholder="name"
                required
                />
              <label className="insession-label" for="name">name</label>
          </div>
          <br />
            <div className={`input-border ${errors}`}>
            <input
                className="session-input"
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                // placeholder="password"
                required 
                />
            <label className="insession-label" for="password">password</label>
          </div>
          <br />
          <button className="session-submit" type="submit" >Sign Up</button>
          <div className="session-bottom">
            <div className="session-change">
              <div className="session-change-question">Already have an account?</div>
                <div className="session-change-button" onClick={this.props.clearErrors.bind(this)} >{this.props.otherForm}</div>
            </div>
          </div>
        </form>
        </div>
     </div>
    )
    
  }
}

export default SignupForm;