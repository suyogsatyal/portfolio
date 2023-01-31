import React from "react";
import myavatar from "./myavatar.png";
import downArrow from "./downArrow.svg";
import DarkToggle from "./darkToggle";
import "./dark.css"
import SidebarDetails from "./SidebarDetails";

const Sidebar = () => {
    function toggleContact() {
        console.log("wirking");
    }

    function sync1(checkState1){
        console.log(checkState1)
    }

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
                <div className="nameCard text-left lg:text-center py-3 items-center flex flex-row xl:flex-col">
                    <img src={myavatar} alt="userEmoji" className="w-20 h-20 m-1 sm:w-24 sm:h-24 sm:m-4 bg-stone-700 rounded-2xl sm:rounded-3xl" />
                    <div className="flex flex-col">
                        <h2 className="productSansBold text-xl leading-10 sm:text-[28px] text-center">Suyog Satyal</h2>
                        <span className="bg-stone-700 productSansLight text-center text-sm px-3 py-1 md:px-5 sm:py-2 rounded-xl">Web Developer</span>
                    </div>
                </div>
                <hr className="my-2  border-gray-700 m-auto" />
                <SidebarDetails />
                <hr className="my-2  border-gray-700 m-auto" />
                <div className="flex flex-row">
                    <a href="http://github.com/suyogsatyal">
                        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github" className="w-5 h-5 m-2" />
                    </a>
                    <a href="http://linkedin.com/in/suyogsatyal">
                        <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin" className="w-5 h-5 m-2" />
                    </a>
                    <a href="http://instagram.com/suyogsatyal">
                        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="instagram" className="w-5 h-5 m-2" />
                    </a>
                </div>
                <div className="relative block xl:hidden rounded-3xl cursor-pointer">
                    <div className="darkToggle absolute block lg:hidden -right-3 sm:-right-6 -bottom-3 sm:-bottom-6 border border-gray-700 rounded-tl-3xl">
                        <input id="toggle" onChange={sync1(this)} className="toggle m-2" type="checkbox" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar