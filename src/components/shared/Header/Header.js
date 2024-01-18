import Image from 'next/image';
import logo from '@/assets/logo.svg';
import smalllogo from '@/assets/small-logo.png';
import './Header.css';

import { IoSearchOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';



const Header = () => {
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
                            <Link href='/dashboard'><div className='bg-[#BBBAC7] w-[38px] h-[38px] rounded-full flex items-center justify-center hover:bg-[#888E9F] transition duration-300'>
                                <span><MdDashboard className='text-[#FFFFFF] w-[20px] h-[20px]' />
                                </span>
                            </div></Link>
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