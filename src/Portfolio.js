import React from "react";
import { motion } from "framer-motion";

function Portfolio(){
    return(
        <div>
       <div>
       <h1 className="portfolioTitle "> Ninalem</h1>
      <video className="ninalemVideo" src={"Ninalem.mov"} controls="controls" autoplay="true" />
      <br/>
      <p className="ninalemParagraph">
        This website can be used to connect people to Black owned businesses across America.
        Implementing the Yelp Fusion API to display the business details,you can also register 
        for events that are being held for the business. Ninalem was built with a Ruby/Rails backend and React frontend.
      </p>
      <button className="navbarbuttoncss">
      <a  className="NinalemLink" href="https://ninalem.herokuapp.com/" target="_blank"> Visit Ninalem</a>
      </button>
      <button className="navbarbuttoncss">
      <a  className="NinalemLink" href="https://github.com/brithecoder/phase-5-project" target="_blank"> Github </a>
      </button>
       </div> 
       <div className="marginforPortfolio">
      <h1 className="portfolioTitle"> This Site</h1>
      <p className="ninalemParagraph">This site was built with the React framework and Framer motion library. </p>
      <button className="navbarbuttoncss">
      <a  className="NinalemLink" href="https://github.com/brithecoder/My-personal-website-" target="_blank"> Github </a>
        </button>
       
       </div>
     </div>

    )
}
export default Portfolio;