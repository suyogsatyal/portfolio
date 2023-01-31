import React from "react";
import email from './email.svg';
import phone from './phone.svg';
import calendar from './calendar.svg';
import location from './location.svg'

const SidebarDetails = () => {
    return(
        
        <div className="sidebarDetails py-3 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
                <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300">
                    <div className="bg-stone-800 rounded-lg socialIcons">
                        <img src={email} alt="" srcset="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3" />
                    </div>
                    <div className="text-gray-400 text-xs leading-none">
                        EMAIL
                        <br />
                        <a href="mailto:suyogsatyal@gmail.com" className="text-gray-300 text-base">suyogsatyal@gmail.com</a>
                    </div>
                    
                </div>
                <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300">
                    <div className="bg-stone-800 rounded-lg socialIcons">
                        <img src={phone} alt="" srcset="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3" />
                    </div>
                    <div className="text-gray-400 text-xs leading-none">
                        PHONE
                        <br />
                        <a href="tel:+9779762423131" className="text-gray-300 text-base">+977 9762423131</a>
                    </div>
                </div>
                <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300">
                    <div className="bg-stone-800 rounded-lg socialIcons">
                        <img src={calendar} alt="" srcset="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3" />
                    </div>
                    <div className="text-gray-400 text-xs leading-none">
                        BIRTHDAY
                        <br />
                        <span className="text-gray-300 text-base">August 28, 2003</span>
                    </div>
                </div>
                <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300">
                    <div className="bg-stone-800 rounded-lg socialIcons">
                        <img src={location} alt="" srcset="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3" />
                    </div>
                    <div className="text-gray-400 text-xs leading-none">
                        LOCATION
                        <br />
                        <span className="text-gray-300 text-base">Bansbari, Kathmandu</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarDetails;