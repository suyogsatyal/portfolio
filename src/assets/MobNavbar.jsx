import React from "react";


const MobNavbar = () => {
    return(
        <div className="grid lg:hidden fixed bottom-0 left-0 w-full h-16 text-xs sm:text-base items-center border border-gray-700 dark:bg-[#131313] rounded-tl-3xl rounded-tr-3xl bg-opacity-75">
            <div className="flex flex-row justify-around md:justify-center sm:px-9 text-gray-200">
                <div className="cursor-pointer hover:text-gray-500 mx-2 sm:mx-6 md:mx-8 duration-75">About</div>
                <div className="cursor-pointer hover:text-gray-500 mx-2 sm:mx-6 md:mx-8 duration-75">Resume</div>
                <div className="cursor-pointer hover:text-gray-500 mx-2 sm:mx-6 md:mx-8 duration-75">Portfolio</div>
                <div className="cursor-pointer hover:text-gray-500 mx-2 sm:mx-6 md:mx-8 duration-75">Blog</div>
                <div className="cursor-pointer hover:text-gray-500 mx-2 sm:mx-6 md:mx-8 duration-75">Contact</div>
            </div>
        </div>
    )
}

export default MobNavbar