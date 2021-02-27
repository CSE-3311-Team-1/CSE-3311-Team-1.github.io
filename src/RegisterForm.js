import React from 'react';
import './components/Form.css'


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
     
      <React.Fragment className='frag-class'>
      
      
      <div className='form-content-centre'>
        
       
        
        <form className='form' onSubmit={this.handleSubmit}>
          <h1 className='form-title'>
            Get started with us today! Create your<br /> 
            account by fillig out the <br />
            information below.
          </h1>
          <br /> <br /> <br />
          <div className='form-inputs'>
            <label htmlFor='FName' className='form-label'>
              First Name
            </label>
              <input 
              id='FName'
              className='form-input'
              type="text" 
              name="FName"
              placeholder="Enter your First Name"
              value={this.state.value} 
              onChange={this.handleChange} 
              />
            
          </div>
          <div className='form-inputs'>
            <label htmlFor='LName' className='form-label'>
              Last Name
            </label>
              <input 
              id='LName'
              className='form-input'
              type="text" 
              name="LName"
              placeholder="Last Name"
              value={this.state.value} 
              onChange={this.handleChange} 
              />
           
          </div>
          <div className='form-inputs'>
            <label htmlFor='Email' className='form-label'>
              Email
            </label>
              <input 
              id='Email'
              className='form-input'
              type="text" 
              name="Email"
              placeholder="Enter your Email Address"
              value={this.state.value} 
              onChange={this.handleChange} 
              />
            
          </div>
            <div className='form-inputs'>
            <label htmlFor='EmailConf' className='form-label'>
              Confirm Email
            </label>
              <input 
              id='EmailConf'
              className='form-input'
              type="text" 
              name="EmailConf"
              placeholder="Confirm your Email Address"
              value={this.state.value} 
              onChange={this.handleChange} 
              />
            
            </div>
            <div className='form-inputs'>
            <label htmlFor='pass' className='form-label'>
              Password
            </label>
              <input 
              id='pass'
              className='form-input'
              type="password" 
              name="pass"
              placeholder="password"
              value={this.state.value} 
              onChange={this.handleChange} 
              />
            
          </div>
          <div className='form-inputs'>
            <label htmlFor='passConf' className='form-label'>
              Confirm Password
              </label>
              <input 
              id='passConf'
              className='form-input'
              type="password" 
              name="passConf"
              placeholder="Confirm password"
              value={this.state.value} 
              onChange={this.handleChange} 
              />
            
          </div>
        
          
          <input className='button' type="submit" value="Register" />
        </form>
      </div>
      </React.Fragment>
     
    );
  }
}

export default RegisterForm;
