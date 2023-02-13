import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
// import './test.css'

const Hero = () => {
    return (
        <div className="hero basis-4/5 my-2 mx-0 sm:m-3 truncate bg-[#bbbbbb] dark:bg-[#1e1e1f] border border-gray-400 dark:border-gray-700 rounded-3xl">
            <Navbar />
            <div className="heroContent p-2 sm:p-5 md:p-8">
                <About />
                <Resume />
                <Portfolio />
            </div>
        </div>
    )
}

export default Hero