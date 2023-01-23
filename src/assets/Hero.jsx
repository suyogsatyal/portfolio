import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
// import './test.css'

const Hero = () => {
    return(
        <div className="hero basis-4/5 text-white border border-gray-700 rounded-3xl">
            <Navbar />
            <About />
            <Resume />
            <Portfolio />
        </div>
    )
}

export default Hero