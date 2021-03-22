import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';


const home = () => {
    return (
       <div id="home">
         <div className = "container">
     
     <img src="/student-image.jpg" alt=""/>
      <Link to="/login">
      <button className = "btn">Get Started</button>
          </Link>
       </div>
        </div>
    );
}
 
export default home;