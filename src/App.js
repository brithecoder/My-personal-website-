import React from 'react';
import './App.css';
import { motion } from "framer-motion";
import Secondcomponent from './Secondcomponent';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Connect from './Connect';
// import {Motion, spring} from 'react-motion';


import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";


function App() {
  return (

 <div className="app">
   <div className="container">
    <div className="navbar">
      <Navbar />
   <Switch>
     <Route exact path="/">
        <div className='secondiv'>
           <Secondcomponent  />
        </div>
     </Route>
     <Route exact path="/aboutme">
       
          <AboutMe >
          
            </AboutMe>
     </Route>
     <Route exact path="/resume">
       <Resume />
     </Route>
     <Route exact path="/portfolio">
       <Portfolio />
     </Route>
     <Route exact path="/connect">
      <Connect />
    </Route> 
    
   
  </Switch>
  </div>
    </div>
 </div>
  )
}


export default App;
