import React,{useState} from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

function Resume(){
    const [isClicked,setClicked]= useState(false);
    return(
        <div>
            
            <div>
            <Box className="resumePaper"
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 720,
          height: 720,
        },
      }}
    >

      <Paper className="resumePaper" variant="outlined" elevation={24}>
    <ul className="resumeContent">
       <h2> Brianna Gordon</h2>

    <h3>Los Angeles, CA 90028 | 313-685-3013 | brigordon574@gmail.com 
brithecoder| https://brigordon574.medium.com </h3>
<li> <b>SOFTWARE ENGINEER </b></li>
<p> Experienced in Ruby on Rails and JavaScript based programming. My degree in ethic studies, student leadership, and project management equips me with great tools for collaborating with coworkers from diverse backgrounds as well as empathy and understanding for customers. </p>

<li> <b>EDUCATION </b> </li>

<p> <b>Flatiron School </b>
	Seattle, Washington
Full Stack Web Development, Ruby on Rails and JavaScript program 	05/ 2021 - 08/2021 </p>

<p> <b>California State University, Los Angeles </b> 
Los Angeles, California
BA, Pan African Studies Magna Cum Laude  08/2019 - 12/2020  </p>	                                                          
<li> <b> TECHNICAL SKILLS </b> </li>
<p> Ruby, Rails, SQL, Javascript, React, Redux,Rest API, OAuth, CSS, Bootstrap, HTML, Git, Github, OOP </p>
<li> <b> TECHNICAL PROJECTS </b> </li>
<br/>
<li> <b> Ninalem </b> </li> 
https://github.com/brithecoder/phase-5-project | https://loom.com/share/06bcfef2583d4c6da78a2b1e07ed6bf1 
<p>Connect  to Black owned business in the United States
Ruby on Rails backend and React front end 
Implements the Yelp Fusion API to display business information.
Adds user validations and Bcrypt to ensure user security </p>

<li> <b>Nail Code </b> </li>
 https://github.com/suey0128/phase-4-project |
<p> E-commerce store for artificial nail care
Rails backend React front end 
Applies a payment form using Material- ui 
Executes teamwork and project planning </p>

<li> <b> Activity Wheel </b> </li>
 https://github.com/brithecoder/phase-1-project 
<p>Provides random activities for the user to pick through 
JavaScript project 
Utilized public API and JSON backend 
Demonstrates asynchronous fetching and callback functions </p>

<li> <b>EXPERIENCE</b> </li>
CSULA Athletics Fiance Division	Los Angeles,California
Student Assistant  	       11/2019 -12/2020
Operational support, data entry, office customer service 
Working knowledge of Microsoft Word, Excel and Internet 
Generated reports on financial activity for various athletic department logistics 

</ul>
          </Paper>
    </Box>

                </div>
 </div>
    );
}
export default Resume;