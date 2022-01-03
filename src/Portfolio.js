import React from "react";
import { motion } from "framer-motion";

function Portfolio(){
    return(
        <div>
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
         This site 
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
         Nail Code 
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
         Ninalem
       </button>
         </motion.div>
            </div>

        </div>
    )
}
export default Portfolio;