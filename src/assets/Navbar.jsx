import React from "react";
import "./dark.css";

const Navbar = () => {
    return(
        <div className="relative">
            <div className="absolute lg:grid content-center -top-1 -right-1 h-16 w-500 dark:bg-[#2B2B2B] dark:text-gray-50 border border-gray-700 hidden rounded-bl-3xl">
                <div className="flex flex-row justify-around px-3 text-gray-200">
                    <div className="cursor-pointer hover:text-gray-500 duration-75">About</div>
                    <div className="cursor-pointer hover:text-gray-500 duration-75">Resume</div>
                    <div className="cursor-pointer hover:text-gray-500 duration-75">Portfolio</div>
                    <div className="cursor-pointer hover:text-gray-500 duration-75">Blog</div>
                    <div className="cursor-pointer hover:text-gray-500 duration-75">Contact</div>
                    <input id="toggle" className="toggle" type="checkbox"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar