import React, { useState, useEffect, useContext } from "react";
import { ModeContext } from '../App';
import "./dark.css";

const Navbar = ({ setActiveTab }) => {
    const darkContains = localStorage.getItem('isChecked');
    const [isChecked, setIsChecked] = useState(darkContains);
    const { setMode } = useContext(ModeContext);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
        localStorage.setItem('isChecked', isChecked);
        setMode(localStorage.getItem('isChecked'));
    }, [isChecked]);

    useEffect(() => {
        const savedChecked = localStorage.getItem('isChecked');
        if (savedChecked) {
            setIsChecked(JSON.parse(savedChecked));
        }
    }, []);

    const [activeTab, setActiveTabState] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTabState(tabIndex);
        setActiveTab(tabIndex);
    };



    return (
        <div className="relative">
            <div className="absolute lg:grid content-center -top-1 -right-1 h-16 w-500 dark:bg-[#2B2B2B] dark:text-gray-50 border border-gray-400 dark:border-gray-700 hidden rounded-bl-3xl">
                <div className="flex flex-row justify-around px-3 text-gray-800 dark:text-gray-400">
                    <div className={`cursor-pointer duration-75 hover:text-gray-500 ${activeTab === 1 ? "dark:text-gray-100 dark:hover:text-gray-500" : "dark:hover:text-gray-500"}`} onClick={() => handleTabClick(1)}>About</div>
                    <div className={`cursor-pointer duration-75 hover:text-gray-500 ${activeTab === 2 ? "dark:text-gray-100 dark:hover:text-gray-500" : "dark:hover:text-gray-500"}`} onClick={() => handleTabClick(2)}>Resume</div>
                    <div className={`cursor-pointer duration-75 hover:text-gray-500 ${activeTab === 3 ? "dark:text-gray-100 dark:hover:text-gray-500" : "dark:hover:text-gray-500"}`} onClick={() => handleTabClick(3)}>Portfolio</div>
                    <div className={`cursor-pointer duration-75 hover:text-gray-500 ${activeTab === 4 ? "dark:text-gray-100 dark:hover:text-gray-500" : "dark:hover:text-gray-500"}`} onClick={() => handleTabClick(4)}>Blog</div>
                    <div className={`cursor-pointer duration-75 hover:text-gray-500 ${activeTab === 5 ? "dark:text-gray-100 dark:hover:text-gray-500" : "dark:hover:text-gray-500"}`} onClick={() => handleTabClick(5)}>Contact</div>
                    <input id="toggle" className="toggle" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                </div>
            </div>
        </div>
    )
}

export default Navbar