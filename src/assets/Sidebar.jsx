import React, { useState, useEffect } from "react";
import downArrow from "./downArrow.svg";
// import DarkToggle from "./darkToggle";
import "./dark.css"
import SidebarDetails from "./SidebarDetails";
import SidebarNameCard from "./SidebarNameCard";

const Sidebar = () => {
    
    const [showElement, setShowElement] = useState(false);

    const toggleContact = () => {
        setShowElement(!showElement);
    };

    const darkContains = document.querySelector('html').classList.contains('dark');
    const [isChecked, setIsChecked] = useState(darkContains);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
        document.querySelector('html').classList.toggle('dark', isChecked);
    }, [isChecked]);

    return (
        <div className="sidebar sectionDarkBG basis-1/5 border border-gray-700 my-2 mx-0 sm:m-3 rounded-3xl overflow-hidden">
            <div className="text-gray-100 dark:text-gray-50 lg:sticky p-2 sm:p-5 ">
                <div className="relative block xl:hidden rounded-3xl cursor-pointer">
                    <div className="absolute hidden sm:block -right-6 -top-6 p-2 border border-1 border-gray-700 rounded-bl-3xl text-blue-300" onClick={toggleContact}>
                        Show Contacts
                    </div>
                    <div className="absolute block sm:hidden -right-3 -top-3 border border-1 border-gray-700 rounded-bl-3xl text-blue-300" onClick={toggleContact}>
                        <img src={downArrow} alt="" className="w-6 h-6 m-2" />
                    </div>
                </div>
                <SidebarNameCard />

                <div className="hidden xl:block">
                    <SidebarDetails />
                </div>

                <div className={`${showElement ? 'h-[346px] md:h-[218px] lg:h-[226px]' : 'h-0'}  xl:hidden transition-all ease-in-out duration-300 overflow-hidden`}><SidebarDetails />
                </div>

                <div className="relative block xl:hidden rounded-3xl cursor-pointer">
                    <div className="darkToggle absolute block lg:hidden -right-3 sm:-right-6 -bottom-3 sm:-bottom-6 border border-gray-700 rounded-tl-3xl">
                        <input id="toggle" className="toggle m-2 p-2" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar