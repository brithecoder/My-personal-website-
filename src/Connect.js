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
          <form action="https://www.linkedin.com/in/brianna-gordon" target="_blank">
       <button className="circles linkedinbutton">
       <a  className="connectLinks"> Linkedin </a>
       </button>
       </form>
         </motion.div>
         <motion.div className="motionDiv flex-child"
         whileHover={{ scale: 1.2, rotate: 360 }}
         whileTap={{
           scale: 0.8,
           rotate: -90,
           borderRadius: "100%"
         }}
       >
         <form action="https://github.com/brithecoder?tab=repositories" target="_blank">
       <button className="circles githubbutton">
        <a className="connectLinks" > Github </a>
       </button>
       </form>
         </motion.div>
         <motion.div className="motionDiv flex-child"
         whileHover={{ scale: 1.2, rotate: 360}}
         whileTap={{
           scale: 0.8,
           rotate: -90,
           borderRadius: "100%"
         }}
       >
        <form action="https://brigordon574.medium.com/" method="get" target="_blank">
       <button className="circles medium">
       <a className="connectLinks" > Medium </a>
       </button>
       </form>
         </motion.div>
            </div>
        </div>
    )
}
export default Connect;