import React from 'react';
import './App.css';
import { motion } from "framer-motion";
import Secondcomponent from './Secondcomponent';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Connect from './Connect';
import Box from '@mui/material/Box';
import HamburgerMenu from './HamburgerMenu';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidebar from './Sidebar';
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];
  console.log("hellow world");
  console.log("user agent: " + navigator.userAgent);
  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing ={{xs:2, md:3}} columns={{ xs: 4, sm: 8, md: 12 }}>
        <div className="app">
           <div className="container">
              <Navbar className="navbar"/>
              <HamburgerMenu className="hamburgerMenu" Sidebar={Sidebar}/>
              <Switch>
                <Route exact path="/">
                    <div className='secondiv'>
                      <Secondcomponent detectMob={detectMob} />
                      </div>
                </Route>
                <Route exact path="/resume">
                  <Resume  detectMob={detectMob}/>
                </Route>
                <Route exact path="/portfolio">
                  <Portfolio detectMob={detectMob} />
                </Route>
                <Route exact path="/connect">
                  <Connect />
                </Route> 
            </Switch>
            </div>
        </div>
      </Grid>
   </Box>
  )
}


export default App;
