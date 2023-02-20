import React, {useState} from "react";
import Navbar from "./Navbar";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import MobNavbar from "./MobNavbar";
import Blog from "./Blog";
import Contact from "./Contact";
// import './test.css'

const Hero = () => {


    const [activeTab, setActiveTab] = useState(1);
    
    return (
        <div className="basis-4/5">
            <div className="hero my-2 mx-0 sm:m-3 truncate bg-[#bbbbbb] dark:bg-[#1e1e1f] border border-gray-400 dark:border-gray-700 rounded-3xl">
            <Navbar setActiveTab={setActiveTab}/>
            <div className="heroContent p-2 sm:p-5 md:p-8">
                <div className={activeTab === 1 ? "block" : "hidden"}>
                    <About />
                </div>
                <div className={activeTab === 2 ? "block" : "hidden"} >
                    <Resume />
                </div>
                <div className={activeTab === 3 ? "block" : "hidden"} >
                    <Portfolio />
                </div>
                <div className={activeTab === 4 ? "block" : "hidden"} >
                    <Blog />
                </div>
                <div className={activeTab === 5 ? "block" : "hidden"} >
                    <Contact />
                </div>
            </div >
        </div >
        <MobNavbar setActiveTab={setActiveTab}/>
        </div>
    )
}

export default Hero