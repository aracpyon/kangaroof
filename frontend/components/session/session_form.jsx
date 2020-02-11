import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.processForm(user);
    this.setState({
      email: "",
      name: "",
      password: ""
    })
    //clearing login information
  }

  render() {
    const form = this.props.formType === 'login' ? (
      <div className="login-form">
        <form>
          <label>
            email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')} />
          </label>
          <br />
          <label htmlFor="">
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
          <br />
          <button onClick={this.handleSubmit}>Log in</button>
        </form>
      </div>
    ) : (
        <div className="signup-form">
          <form action="">
            <label>
              email
            <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')} />
            </label>
            <br/>
            <label >
              name
            <input
                type="text"
                value={this.state.name}
                onChange={this.handleInput('name')} />
            </label>
            <br />
            <label>
              Password
            <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')} />
            </label>
            <br />
            <button onClick={this.handleSubmit}>Sign Up</button>
          </form>
        </div>
      )
    return (
      <div>
        {form}
      </div>
    )
  }
}

export default SessionForm;