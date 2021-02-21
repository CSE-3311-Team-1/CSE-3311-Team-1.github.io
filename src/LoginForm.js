import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();
  }

  render() {
    return (
      <form id="loginform" onSubmit={this.handleSubmit}>
        <label>
          <input 
          type="text" 
          name="Email"
          placeholder="Email Address"
          value={this.state.value} 
          onChange={this.handleChange} 
          />
        </label>
        <br></br>
        <label>
        <input 
          type="text" 
          name="pass"
          placeholder="Password"
          value={this.state.value} 
          onChange={this.handleChange} 
          />
        </label>
        <br></br>
        Don't have an account? Register <a href='/register'>here</a>.
        <br></br>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;
