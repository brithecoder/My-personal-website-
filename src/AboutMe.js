import React from "react";
import { motion } from "framer-motion";

function  AboutMe(){
    return(
    <div className="AboutMeDiv">
       <button className="aboutMeBox"> 
         
           <div className="aboutMeText">
            <ul className="aboutMeList">
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
          
    
       </button>
       </div> 
    )
}
export default AboutMe;
