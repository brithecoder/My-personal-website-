import React from "react";
import { motion } from "framer-motion";

function  AboutMe(){
    return(
    <div>
                <h2> This is About ME  </h2>
      <div className="circle-flex-container"> 
         <motion.div className="motionDiv flex-child" 
         whileHover={{ scale: 1.2, rotate: 90 }}
         whileTap={{
           scale: 0.8,
           rotate: -90,
           borderRadius: "100%"
         }}
       >
       <button className="circles">
         Extra Curriculars
       </button>
         </motion.div>
         <motion.div className="motionDiv flex-child"
         whileHover={{ scale: 1.2, rotate: 90}}
         whileTap={{
           scale: 0.8,
           rotate: -360,
           borderRadius: "100%"
         }}
       >
       <button className="circles">
         Bio
       </button>
         </motion.div>
         <motion.div className="motionDiv  flex-child"
         whileHover={{ scale: 1.2, rotate: 90 }}
         whileTap={{
           scale: 0.8,
           rotate: -90,
           borderRadius: "100%"
         }}
       >
       <button className="circles">
         Volunteer work and Internships
       </button>
         </motion.div>
       </div> 
       {/* <img src="shecodecert.jpeg"  width="400px"/> */}
    </div>
    )
}
export default AboutMe;
