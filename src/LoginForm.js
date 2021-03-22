import React from 'react';
import './Components/Form.css'

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
      <form className='form' id="loginform" onSubmit={this.handleSubmit}>
         <div className='form-inputs'>
           <h1>Sign in</h1>
        <label>
          Email: 
        </label>
          <input className='form-input'
          type="text" 
          name="Email"
          placeholder="Email Address"
          value={this.state.value} 
          onChange={this.handleChange} 
          />
          </div>
        <div className='form-inputs'>
        <label>
          Password: 
        </label>
        <input className='form-input'
          type="text" 
          name="pass"
          placeholder="Password"
          value={this.state.value} 
          onChange={this.handleChange} 
          />
          </div>
        
        
        Don't have an account? Register <a href='/register'>here</a>.
        <br></br>
        <input className='button' type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;
