import React, {useState} from "react";


const MobNavbar = ({setActiveTab}) => {
    const [activeTab, setActiveTabState] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTabState(tabIndex);
        setActiveTab(tabIndex);
    };
    return(
        <div className="grid lg:hidden fixed bottom-0 left-0 w-full h-16 text-xs text-[15px] sm:text-base items-center border-x border-t border-gray-400 dark:border-gray-700 bg-[#bbbbbb] dark:bg-[#131313] rounded-tl-3xl rounded-tr-3xl">
            <div className="flex flex-row justify-around md:justify-center sm:px-9 text-gray-600 dark:text-gray-200">
                <div className={`cursor-pointer duration-75 mx-2 sm:mx-6 md:mx-8 hover:text-gray-500 ${activeTab === 1 ? "text-gray-900 dark:text-gray-100 dark:hover:text-gray-500" : "dark:hover:text-gray-500"}`} onClick={() => handleTabClick(1)}>About</div>
                <div className={`cursor-pointer duration-75 mx-2 sm:mx-6 md:mx-8 hover:text-gray-500 ${activeTab === 2 ? "text-gray-900 dark:text-gray-100 dark:hover:text-gray-500" : "dark:hover:text-gray-500"}`} onClick={() => handleTabClick(2)}>Resume</div>
                <div className={`cursor-pointer duration-75 mx-2 sm:mx-6 md:mx-8 hover:text-gray-500 ${activeTab === 3 ? "text-gray-900 dark:text-gray-100 dark:hover:text-gray-500" : "dark:hover:text-gray-500"}`} onClick={() => handleTabClick(3)}>Portfolio</div>
                <div className={`cursor-pointer duration-75 mx-2 sm:mx-6 md:mx-8 hover:text-gray-500 ${activeTab === 4 ? "text-gray-900 dark:text-gray-100 dark:hover:text-gray-500" : "dark:hover:text-gray-500"}`} onClick={() => handleTabClick(4)}>Blog</div>
                <div className={`cursor-pointer duration-75 mx-2 sm:mx-6 md:mx-8 hover:text-gray-500 ${activeTab === 5 ? "text-gray-900 dark:text-gray-100 dark:hover:text-gray-500" : "dark:hover:text-gray-500"}`} onClick={() => handleTabClick(5)}>Contact</div>
            </div>
        </div>
    )
}

export default MobNavbar