
import './Components/App.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar";

import  { Component } from 'react'


import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';

import Login from './Components/Login';
import Register from './Components/Register';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navbar />
       
   
  
   
        
    </div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/login" component={Login}/>
             <Route path="/register" component={Register}/>
            <Route component={Error}/>
           </Switch>
     
      </BrowserRouter>
    );
  }
}

export default App;
