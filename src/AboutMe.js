import React from "react";
import { motion } from "framer-motion";

function  AboutMe(){
    return(
    <div className="AboutMeDiv">
       <button className="aboutMeBox"> 
         <p className="aboutMeText">
           <div className="aboutMeText">
            My name is Brianna Gordon. I am originally from Detroit Michigan. I relocated to Los Angeles,
            California to finish my undergraduate degree.
            I graduated from California State University, Los Angeles where
            I received a degree in Pan African Studies. After graduating I decided to do an introductory course in coding.
            I enrolled in a course with SheCodes where I learned HTML,CSS,and JavaScript.
            I decided to further my education in coding and  enrolled in a full time software
             engineering bootcamp where I learned to create a full stack web application.
            My stack includes React frontend with Ruby on Rails backend.
           Some of my hobbies include hiking,art and music appreciation,and learning.
            I love to travel and learn about different cultures. 
             </div>
             </p>
    
       </button>
       </div> 
    )
}
export default AboutMe;
