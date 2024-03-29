import React, { useState, useEffect, useContext } from "react";
import { ModeContext } from '../App';
import downArrow from "/img/downArrow.svg";
import downArrowDark from "/img/downArrowDark.svg";
import "./dark.css"
import SidebarDetails from "./SidebarDetails";
import SidebarNameCard from "./SidebarNameCard";

const Sidebar = () => {

    const [showElement, setShowElement] = useState(false);
    const { setMode } = useContext(ModeContext);

    const toggleContact = () => {
        setShowElement(!showElement);
    };

    const darkContains = localStorage.getItem('isChecked');
    const [isChecked, setIsChecked] = useState(darkContains);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
        localStorage.setItem('isChecked', isChecked);
        setMode(localStorage.getItem('isChecked'))
    }, [isChecked]);

    useEffect(() => {
        const savedChecked = localStorage.getItem('isChecked');
        if (savedChecked) {
            setIsChecked(JSON.parse(savedChecked));
        }
    }, []);


    return (
        <div className="sidebar bg-[#bbbbbb] dark:bg-[#1e1e1f] basis-1/5 border lg:sticky top-8 border-gray-400 dark:border-gray-700 my-2 mx-0 sm:m-3 rounded-3xl overflow-hidden h-max">
            <div className="text-gray-700 dark:text-gray-50 p-2 sm:p-5 ">
                <div className="relative block xl:hidden rounded-3xl cursor-pointer">
                    <div className="absolute hidden sm:block -right-6 -top-6 p-2 border border-1 border-gray-400 dark:border-gray-700 rounded-bl-3xl dark:text-blue-300 text-blue-900" onClick={toggleContact}>
                        Show Contacts
                    </div>
                    <div className="absolute block sm:hidden -right-3 -top-3 border border-1 border-gray-400 dark:border-gray-700 rounded-bl-3xl text-blue-900 dark:text-blue-300" onClick={toggleContact}>
                        <img src={downArrow} alt="" className="w-6 h-6 m-2 hidden dark:block" />
                        <img src={downArrowDark} alt="" className="w-6 h-6 m-2 block dark:hidden" />
                    </div>
                </div>
                <SidebarNameCard />

                <div className="hidden xl:block">
                    <SidebarDetails />
                </div>

                <div className={`${showElement ? 'h-[346px] md:h-[218px] lg:h-[226px]' : 'h-0'}  xl:hidden transition-all ease-in-out duration-300 overflow-hidden`}><SidebarDetails />
                </div>

                <div className="relative block xl:hidden rounded-3xl cursor-pointer">
                    <div className="darkToggle absolute block lg:hidden -right-3 sm:-right-6 -bottom-3 sm:-bottom-6 border border-gray-400 dark:border-gray-700 rounded-tl-3xl">
                        <input id="toggle" className="toggle m-2 p-2" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar