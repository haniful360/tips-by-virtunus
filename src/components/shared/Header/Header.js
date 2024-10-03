"use client"
import Image from 'next/image';
import logo from '@/assets/logo.svg';
import smalllogo from '@/assets/small-logo.png';
import './Header.css';

import { IoSearchOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ProfileInfo from '../../UI/ProfileInfo';
import Notification from '@/components/UI/Notification';
import CreateTips from '@/components/UI/CreateTips/CreateTips';
import SelectCategory from '@/components/UI/CreateTips/SelectCategory';
import TitlePhotoUpload from '@/components/UI/CreateTips/TitlePhotoUpload';



const Header = () => {

    const ref = useRef()
    const [isShowNotification, setIsShowNotification] = useState(false);
    const [isShowProfile, setIsShowProfile] = useState(false);
    const [isShowTips, setIsShowTips] = useState(false);

    const handleNotificationClick = () => {
        setIsShowNotification(true)
        setIsShowProfile(false);
    }
    const handleProfileClick = () => {
        setIsShowProfile(true)
        setIsShowNotification(false);
    }

    const handleCreateTips = () => {
        setIsShowTips(!isShowTips);
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isShowNotification && ref.current && !ref.current.contains(e.target)) {
                setIsShowNotification(false);
            }
            if (isShowProfile && ref.current && !ref.current.contains(e.target)) {
                setIsShowProfile(false);
            }
        }

        document.addEventListener("click", checkIfClickedOutside)

        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [isShowNotification, isShowProfile])



    return (
        <header className='fixed top-0 right-0 left-0 z-50 bg-[#FFFFFF]'>
            <div className="max-w-[1280px] mx-auto lg:px-0 py-[14px] ">
                <div className="">
                    <div className="flex justify-between items-center pl-[15px] lg:pl-[0px] lg:pr-[0px] pr-[5px] h-[48px] lg:h-[56px]">
                        {/* logo */}
                        <div className="w-[220px] h-full flex items-center">

                            <div>
                                <a href="/"><Image src={logo} className="w-[110px] hidden sm:block h-[50px] lg:mx-0"
                                    alt="./images/logo.svg" />
                                </a>
                                <Image className='sm:hidden w-10 h-10' src={smalllogo} alt="" />
                            </div>

                        </div>

                        {/* input  */}
                        <div className="lg:w-[420px] h-[55.2px] mx-auto relative">
                            <IoSearchOutline className="fa-solid w-5 h-5 fa-magnifying-glass absolute top-4 lg:top-5 md:left-2  left-[-45px] bottom-0 lg:text-[#AFA7AB]" />
                            {/* <IoSearchOutline /> */}

                            <input
                                className="w-full h-full lg:ml-[-20px] hidden lg:block bg-[#f1f1f2] text-[14px] focus:outline-none focus:[#D1E9FF] focus:transition focus:duration-300 ease-in padding rounded-[43px] input-br focus:ring-[1px] focus:ring-[#D1E9FF]"
                                type="text" placeholder=" Search ..." />
                        </div>
                        {/* dashboard */}
                        <div className='flex justify-between items-center gap-[10px] lg:gap-[25px]'>
                            <div onClick={handleCreateTips}>
                                <div className='md:hidden'>
                                    <div className='bg-[#3161F1] w-[32px] h-[32px] px-[5px] flex items-center justify-center rounded-[5px]'>
                                        <img src="https://tips.virtunus.com/topbar/plus.png" alt="" />
                                    </div>
                                </div>
                                <div className='hidden md:block'>
                                    <div className=" px-[18px] bg-[#3161F1] h-[42px] flex items-center justify-center rounded-[5px] hover:bg-[#0D35AD] transition duration-300">
                                        <div onClick={() => document.getElementById('my_modal_23').showModal()} className='flex items-center gap-[13px] lg:w-[136px]'>
                                            <span><img className='w-5 h-5' src="https://tips.virtunus.com/topbar/plus.png" alt="" />
                                            </span>

                                            <button  className='text-[16px] ml-[10px] font-bold text-[#FFFFFF]'>Create Tips</button>
                                       
                                            <dialog id="my_modal_23" className="modal">
                                                <div style={{padding:'0px'}} className="modal-box w-12/12 max-w-2xl overflow-y-hidden h-full">
                                                    <form method="dialog">
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div>
                                                        <CreateTips/>
                                                        <SelectCategory/>
                                                        <TitlePhotoUpload/>
                                                    </div>
                                                    
                                                </div>
                                            </dialog>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href='/dashboard'><div className='bg-[#BBBAC7] w-[38px] h-[38px] rounded-full flex items-center justify-center hover:bg-[#888E9F] transition duration-300'>
                                <span><MdDashboard className='text-[#FFFFFF] w-[20px] h-[20px]' />
                                </span>
                            </div>
                            </Link>
                            <div>
                                <button onClick={handleNotificationClick} className='text-[#BBBAC7] hover:text-[#222222]'><IoNotificationsSharp className='text-[22px] leading-5' />
                                </button>
                            </div>
                            <button onClick={handleProfileClick}>
                                <span ><FaUserCircle className='w-10 text-[#DDDDDD] h-10 rounded-full' />
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            {/* Create Tips */}
            {/* {isShowTips && <CreateTips setIsShowTips={setIsShowTips} />} */}
            {/* user profile */}
            {isShowProfile && <div ref={ref}> <ProfileInfo /></div>}
            {/* notification or alert*/}
            {isShowNotification && <div ref={ref}><Notification /></div>}
        </header>
    );
};

export default Header;
