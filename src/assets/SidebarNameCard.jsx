import React from "react";
import myavatar from "/img/myavatar.png";

const SidebarNameCard = () => {
    return (
        <div className="nameCard text-left lg:text-center py-3 items-center flex flex-row xl:flex-col gap-3 md:gap-0">
            <img src={myavatar} alt="userEmoji" className="w-20 h-20 m-1 sm:w-24 sm:h-24 sm:m-4 bg-stone-400 dark:bg-stone-700 rounded-2xl sm:rounded-3xl" />
            <div className="flex flex-col">
                <h2 className="productSansBold text-xl leading-10 text-gray-800 dark:text-gray-50 sm:text-[28px] text-center">Suyog Satyal</h2>
                <span className="bg-stone-400 dark:bg-stone-700 productSansLight text-center text-sm px-3 py-1 md:px-5 sm:py-2 rounded-xl">Web Developer</span>
            </div>
        </div>
    )
}

export default SidebarNameCard;