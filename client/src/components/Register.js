import React, { useEffect, useState } from "react";
import Axios from 'axios';
import '../components/Form.css'

const Register = () => {
   const [emailReg, setEmailReg] = useState("");
   const [passwordReg, setPasswordReg] = useState("");

    const registerPost = () => {
      console.log('registerPost called');

      Axios.post("http://localhost:3001/registeruser", {
        email: emailReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      });
    };

    return (
      <div className='form-content-centre'>

        <form className='form'>
          <h1 className='form-title'>
            Get started with us today! Create your<br /> 
            account by filling out the <br />
            information below.
          </h1>
          <br /> <br /> <br />
          <div className='form-inputs' onSubmit={registerPost}>
            <label htmlFor='Email' className='form-label'>
              Email Address: 
            </label>
              <input 
              id='Email'
              className='form-input'
              type="text" 
              name="Email"
              placeholder="email@gmail.com"
              onChange={(e) => {
                  setEmailReg(e.target.value);
              }}
              />
              </div>
         
          <div className='form-inputs'>
            <label htmlFor='Pass' className='form-label'>
              Password: 
            </label>
              <input 
              id='Pass'
              className='form-input'
              type="password" 
              name="Pass"
              placeholder="Secure Password"
              onChange={(e) => {
                  setPasswordReg(e.target.value);
              }}
              />
              </div>

              <input className='button' type="submit" value="Submit" />
        </form>
      </div>
    );
}
 
export default Register;