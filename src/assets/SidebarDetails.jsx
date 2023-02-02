import React from "react";
import email from '/img/email.svg';
import emailDark from '/img/emailDark.svg';
import phone from '/img/phone.svg';
import phoneDark from '/img/phoneDark.svg';
import calendar from '/img/calendar.svg';
import calendarDark from '/img/calendarDark.svg';
import location from '/img/location.svg'
import locationDark from '/img/locationDark.svg'
import github from '/img/github.svg'
import githubDark from '/img/githubDark.svg'
import linkedin from '/img/linkedin.svg'
import linkedinDark from '/img/linkedinDark.svg'
import instagram from '/img/instagram.svg'
import instagramDark from '/img/instagramDark.svg'

const SidebarDetails = () => {
    return (

        <div className="sidebarDetails">
            <hr className="my-2  border-gray-500 dark:border-gray-700 m-auto" />
            <div className="py-3 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
                    <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300 truncate">
                        <div className="block xl:hidden 2xl:block rounded-lg shadow-socialIcons dark:shadow-socialIconsDark bg-[#bbbbbb] dark:bg-[#1e1e1f] lg:w-[44px] overflow">
                            <img src={email} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3 hidden dark:block" />
                            <img src={emailDark} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3 block dark:hidden" />
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs leading-none">
                            EMAIL
                            <br />
                            <a href="mailto:suyogsatyal@gmail.com" className="text-gray-700 dark:text-gray-300 text-base truncate">suyogsatyal@gmail.com</a>
                        </div>

                    </div>
                    <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300">
                        <div className="block xl:hidden 2xl:block rounded-lg shadow-socialIcons dark:shadow-socialIconsDark bg-[#bbbbbb] dark:bg-[#1e1e1f]">
                            <img src={phone} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3 hidden dark:block" />
                            <img src={phoneDark} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3 block dark:hidden" />
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs leading-none">
                            PHONE
                            <br />
                            <a href="tel:+9779762423131" className="text-gray-700 dark:text-gray-300 text-base">(+977)9762423131</a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300">
                        <div className="block xl:hidden 2xl:block rounded-lg shadow-socialIcons dark:shadow-socialIconsDark bg-[#bbbbbb] dark:bg-[#1e1e1f]">
                            <img src={calendar} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3 hidden dark:block" />
                            <img src={calendarDark} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3 block dark:hidden" />
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs leading-none">
                            BIRTHDAY
                            <br />
                            <span className="text-gray-700 dark:text-gray-300 text-base">August 28, 2003</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 w-min-full items-center productSansLight text-gray-300">
                        <div className="block xl:hidden 2xl:block rounded-lg shadow-socialIcons dark:shadow-socialIconsDark bg-[#bbbbbb] dark:bg-[#1e1e1f]">
                            <img src={location} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3 hidden dark:block" />
                            <img src={locationDark} alt="" className="w-3 h-3 m-2 md:w-5 md:h-5 md:m-3 block dark:hidden" />
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs leading-none">
                            LOCATION
                            <br />
                            <span className="text-gray-700 dark:text-gray-300 text-base">Bansbari, Kathmandu</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-2 border-gray-500 dark:border-gray-700 m-auto" />
            <div className="flex flex-row">
                <a href="http://github.com/suyogsatyal">
                    <img src={github} alt="github" className="w-8 h-8 m-2 hidden dark:block" />
                    <img src={githubDark} alt="github" className="w-8 h-8 m-2 block dark:hidden" />
                </a>
                <a href="http://linkedin.com/in/suyogsatyal">
                    <img src={linkedin} alt="github" className="w-8 h-8 m-2 hidden dark:block" />
                    <img src={linkedinDark} alt="github" className="w-8 h-8 m-2 block dark:hidden" />
                </a>
                <a href="http://instagram.com/suyogsatyal">
                    <img src={instagram} alt="github" className="w-8 h-8 m-2 hidden dark:block" />
                    <img src={instagramDark} alt="github" className="w-8 h-8 m-2 block dark:hidden" />
                </a>
            </div>
        </div>
    )
}

export default SidebarDetails;