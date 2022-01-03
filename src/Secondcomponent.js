import React from 'react';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Secondcomponent(){
    return(
        <Box sx={{ flexGrow: 1 }}>
       <h1 className="AppTitle"> 🙋🏾‍♀️ Im <span className="homepageTitle">Brianna </span>and I design websites </h1>
      <Grid container spacing ={{xs:2, md:3}} columns={{ xs: 4, sm: 8, md: 12 }}>
       <div className="hellobox flex-container">
       <div className= "flex-container">
       <img className="homePageImg flex-child" src="frontpagepic.jpeg"/>
       </div>
       {/* <div className="homepageTextbox flex-child">
           Hello 
           </div> */}
        </div>
        
        </Grid>
        </Box>
    )
}
export default Secondcomponent;