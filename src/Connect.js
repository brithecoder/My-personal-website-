import React from "react";
import { motion } from "framer-motion";

function Connect(){
    return(
        <div>
         <h2>this is connect </h2>
            <div className="flex-container">
            <motion.div className="motionDiv flex-child"
         whileHover={{ scale: 1.2, rotate: 90 }}
         whileTap={{
           scale: 0.8,
           rotate: -90,
           borderRadius: "100%"
         }}
       >
       <button className="circles">
         Linkedin
       </button>
         </motion.div>
         <motion.div className="motionDiv flex-child"
         whileHover={{ scale: 1.2, rotate: 90 }}
         whileTap={{
           scale: 0.8,
           rotate: -90,
           borderRadius: "100%"
         }}
       >
       <button className="circles">
         Github
       </button>
         </motion.div>
         <motion.div className="motionDiv flex-child"
         whileHover={{ scale: 1.2, rotate: 90 }}
         whileTap={{
           scale: 0.8,
           rotate: -90,
           borderRadius: "100%"
         }}
       >
       <button className="circles">
         Medium
       </button>
         </motion.div>
            </div>
        </div>
    )
}
export default Connect;