import React from "react";
import email from './email.svg';
import phone from './phone.svg';
import calendar from './calendar.svg';
import location from './location.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'
import instagram from './instagram.svg'

const SidebarDetails = () => {
    return (

        <div className="sidebarDetails">
            <hr className="my-2  border-gray-700 m-auto" />
            <div className="py-3 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
                    <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300 truncate">
                        <div className="block xl:hidden 2xl:block bg-stone-800 rounded-lg socialIcons lg:w-[44px] overflow">
                            <img src={email} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3 " />
                        </div>
                        <div className="text-gray-400 text-xs leading-none">
                            EMAIL
                            <br />
                            <a href="mailto:suyogsatyal@gmail.com" className="text-gray-300 text-base truncate">suyogsatyal@gmail.com</a>
                        </div>

                    </div>
                    <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300">
                        <div className="block xl:hidden 2xl:block bg-stone-800 rounded-lg socialIcons">
                            <img src={phone} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3" />
                        </div>
                        <div className="text-gray-400 text-xs leading-none">
                            PHONE
                            <br />
                            <a href="tel:+9779762423131" className="text-gray-300 text-base">(+977)9762423131</a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300">
                        <div className="block xl:hidden 2xl:block bg-stone-800 rounded-lg socialIcons">
                            <img src={calendar} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3" />
                        </div>
                        <div className="text-gray-400 text-xs leading-none">
                            BIRTHDAY
                            <br />
                            <span className="text-gray-300 text-base">August 28, 2003</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300">
                        <div className="block xl:hidden 2xl:block bg-stone-800 rounded-lg socialIcons">
                            <img src={location} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3" />
                        </div>
                        <div className="text-gray-400 text-xs leading-none">
                            LOCATION
                            <br />
                            <span className="text-gray-300 text-base">Bansbari, Kathmandu</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-2  border-gray-700 m-auto" />
            <div className="flex flex-row">
                    <a href="http://github.com/suyogsatyal">
                        <img src={github} alt="github" className="w-8 h-8 m-2" />
                    </a>
                    <a href="http://linkedin.com/in/suyogsatyal">
                        <img src={linkedin} alt="linkedin" className="w-8 h-8 m-2" />
                    </a>
                    <a href="http://instagram.com/suyogsatyal">
                    <img src={instagram} alt="instagram" className="w-8 h-8 m-2" />
                    </a>
                </div>
        </div>
    )
}

export default SidebarDetails;