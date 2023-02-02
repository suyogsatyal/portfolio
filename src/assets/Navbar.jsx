import React, { useState, useEffect } from "react";
// import DarkToggle from "./darkToggle";
import "./dark.css";

const Navbar = () => {
    const darkContains = document.querySelector('html').classList.contains('dark');
    const [isChecked, setIsChecked] = useState(darkContains);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
        document.querySelector('html').classList.toggle('dark', isChecked);
        localStorage.setItem('isChecked', isChecked);
    }, [isChecked]);

    useEffect(() => {
        const savedChecked = localStorage.getItem('isChecked');
        if (savedChecked) {
            setIsChecked(JSON.parse(savedChecked));
        }
    }, []);



    return (
        <div className="relative">
            <div className="absolute lg:grid content-center -top-1 -right-1 h-16 w-500 dark:bg-[#2B2B2B] dark:text-gray-50 border border-gray-400 dark:border-gray-700 hidden rounded-bl-3xl">
                <div className="flex flex-row justify-around px-3 text-gray-800 dark:text-gray-100">
                    <div className="cursor-pointer hover:text-gray-500 duration-75">About</div>
                    <div className="cursor-pointer hover:text-gray-500 duration-75">Resume</div>
                    <div className="cursor-pointer hover:text-gray-500 duration-75">Portfolio</div>
                    <div className="cursor-pointer hover:text-gray-500 duration-75">Blog</div>
                    <div className="cursor-pointer hover:text-gray-500 duration-75">Contact</div>
                    <input id="toggle" className="toggle" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                </div>
            </div>
        </div>
    )
}

export default Navbar