import React from 'react';
import './App.css';

class RegisterForm extends React.Component {
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
      <form onSubmit={this.handleSubmit}>
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
          name="EmailConf"
          placeholder="Confirm Email Address"
          value={this.state.value} 
          onChange={this.handleChange} 
          />
        </label>
        <br></br>

        <label>
        <input 
          type="password" 
          name="Pass"
          placeholder="Password"
          value={this.state.value} 
          onChange={this.handleChange} 
          />
        </label>
        <br></br>

        <label>
        <input 
          type="password" 
          name="PassConf"
          placeholder="Confirm Password"
          value={this.state.value} 
          onChange={this.handleChange} 
          />
        </label>
        <br></br>
        
        <input type="submit" value="Register" />
      </form>
    );
  }
}

export default RegisterForm;
