import Image from 'next/image';
import logo from '@/assets/logo.svg';
import smalllogo from '@/assets/small-logo.png';
import './Header.css';

import { IoSearchOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";



const Header = () => {
    return (
        <header>
            <div className="max-w-[1280px] mx-auto lg:px-0 h-[56px] ">
                <div className="py-[14px] shadow-lg lg:shadow-none">
                    <div className="flex justify-between items-center pl-[15px] pr-[5px] h-[48px]">
                        <div className="w-[220px] h-full flex items-center">

                            <div>
                            <a href="/"><Image src={logo} className="w-[110px] hidden sm:block h-[50px] lg:mx-0"
                                alt="./images/logo.svg" />
                            </a>
                            <Image className='sm:hidden w-10 h-10' src={smalllogo} alt="" />
                            </div>

                        </div>

                        <div className="lg:w-[420px] h-[55.2px] mx-auto relative">
                            <IoSearchOutline className="fa-solid w-5 h-5 fa-magnifying-glass absolute top-4 lg:top-5 md:left-0 left-[-45px] bottom-0 lg:text-[#AFA7AB]" />
                            {/* <IoSearchOutline /> */}

                            <input
                                className="w-full h-full lg:ml-[-20px] hidden lg:block bg-[#f1f1f2] focus:outline-none focus:[#D1E9FF] focus:transition focus:duration-500 ease-in padding rounded-[43px] input-br"
                                type="text" placeholder=" Search ..." />
                        </div>

                        <div className='flex justify-between items-center gap-[10px] lg:gap-[25px]'>
                            <div>
                                <div className='md:hidden'>
                                    <div className='bg-[#3161F1] w-[32px] h-[32px] px-[5px] flex items-center justify-center rounded-[5px]'>
                                        <img src="https://tips.virtunus.com/topbar/plus.png" alt="" />
                                    </div>
                                </div>
                                <div className='hidden md:block'>
                                    <div className=" px-[18px] bg-[#3161F1] h-[42px] flex items-center justify-center rounded-[5px] hover:bg-[#0D35AD] transition duration-300">
                                        <div className='flex items-center gap-[13px] lg:w-[136px]'>
                                            <span><img className='w-5 h-5' src="https://tips.virtunus.com/topbar/plus.png" alt="" />
                                            </span>

                                            <button className='text-[16px] ml-[10px] font-bold text-[#FFFFFF]'>Create Tips</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#BBBAC7] w-[38px] h-[38px] rounded-full flex items-center justify-center hover:bg-[#888E9F] transition duration-300'>
                                <span><MdDashboard className='text-[#FFFFFF] w-[20px] h-[20px]' />
                                </span>
                            </div>
                            <div>
                                <button className='text-[#BBBAC7] hover:text-[#222222]'><IoNotificationsSharp className='text-[22px] leading-5' />
                                </button>
                            </div>
                            <div>
                                {/* <Image className='sm:hidden w-10 h-10' src='' alt="" /> */}
                                <span ><FaUserCircle className='w-10 text-[#DDDDDD] h-10 rounded-full' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;