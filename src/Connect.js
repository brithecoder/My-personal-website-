import React from "react";
import { motion } from "framer-motion";

function Connect(){
    return(
        <div>
            <div className="circle-flex-container">
              <motion.div className="motionDiv flex-child"
                whileHover={{ scale: 1.2, rotate: 360}}
                whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              >
       <button className="circles linkedinbutton">
       <a  className="connectLinks" href="https://www.linkedin.com/in/brianna-gordon" target="_blank" > Linkedin </a>
       </button>
         </motion.div>
         <motion.div className="motionDiv"
         whileHover={{ scale: 1.2, rotate: 360 }}
         whileTap={{
           scale: 0.8,
           rotate: -90,
           borderRadius: "100%"
         }}
       >
       <button className="circles githubbutton">
        <a className="connectLinks" href="https://github.com/brithecoder?tab=repositories" target="_blank" > Github </a>
       </button>
         </motion.div>
         <motion.div className="motionDiv flex-child"
         whileHover={{ scale: 1.2, rotate: 360}}
         whileTap={{
           scale: 0.8,
           rotate: -90,
           borderRadius: "100%"
         }}
       >
       <button className="circles medium">
       <a className="connectLinks" href="https://brigordon574.medium.com/" target="_blank" > Medium </a>
       </button>
         </motion.div>
            </div>
        </div>
    )
}
export default Connect;