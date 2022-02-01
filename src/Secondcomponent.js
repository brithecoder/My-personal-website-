import React from 'react';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Secondcomponent(){
    return(
        <div>
        <Box sx={{ flexGrow: 1 }}>
       <h1 className="AppTitle hellobox"> 🙋🏾‍♀️ I'm <span className="homepageTitle">Brianna </span>and I design websites </h1>
      {/* <Grid container spacing ={{xs:2, md:3}} columns={{ xs: 4, sm: 8, md: 12 }}> */}
       {/* <div className="flex-container">
       <div className= "flex-container"> */}
       <img className="homePageImg flex-child" src="frontpagepic.jpeg"/>
       <div classname="newAboutMe">
       <ul className="newaboutMeText">
          <li> Hi, my name is Brianna Gordon. </li>
   <br/> 
<li>I’m a programmer currently based in Los Angeles and originally from Detroit. </li>
<br/> 
<li>I graduated from California State University, Los Angeles with a degree in African Diaspora Studies. </li>
<br/> 
<li>I’ve completed coding bootcamps with SheCodes and Flatiron. My stack includes: HTML, CSS, JavaScript, React, and Ruby on Rails.</li>
<br/> 
<li>My hobbies include: hiking, art and music appreciation. I love to travel and learn about different cultures. </li>
</ul>
       </div>
        
        
        {/* </Grid> */}
        </Box>
        </div>
    )
}
export default Secondcomponent;