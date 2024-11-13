import { Montserrat, Roboto } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsStars } from "react-icons/bs";
import { IoMdLogOut, IoMdStar } from "react-icons/io";
import { RiSendPlane2Fill } from "react-icons/ri";
import { MdSettingsSuggest } from "react-icons/md";
import { MdKeyboardCommandKey } from "react-icons/md";


const montserrat = Montserrat({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const ProfileInfo = () => {
    return (
        <section className=''>
            <img className='absolute top-[83px] z-10 right-4 lg:right-32' src="https://tips.virtunus.com/topbar/up-arrow.svg" alt="" />
            <div className='bg-[#FFFFFF] w-[314px] absolute top-[90px] right-0 lg:right-[110px] rounded-[7px]  border-[0.8px] border-[#F1F1F2]'>
                <div className="flex items-center gap-[20px] p-[30px]">
                    <div>
                        <span ><FaUserCircle className='w-[70px] h-[70px] text-[#DDDDDD] rounded-full' />
                        </span>
                    </div>
                    <div className={`${montserrat.className}`}>
                        <p className=' text-[16px]  mb-1 font-bold leading-[25px] text-[#222222] '>haniful360</p>
                        <Link href='' className=' inline-block p-[7px] bg-[#3161F1] text-[14px] leading-[22px] rounded-[3px] cursor-pointer text-[#FFF] font-semibold hover:bg-[#7699FF] translate duration-300 w-[120px] text-center'>View Profile</Link>
                    </div>
                </div>
                <hr className='pt-1' />
                <div className={`${roboto.className}  m-1.5`}>
                    <Link href=''>
                        <div className='flex gap-[22px] px-[30px] text-[#9C9C9C] hover:bg-[#F7F7F7] hover:text-[#222222] transition duration-100 ease py-[12px] rounded'>
                            <span> <BsStars className='w-[22px] h-[23px]' /></span>
                            <p className='text-[15px] cursor-pointer font-normal'>My Tips</p>
                        </div>
                    </Link>
                    <Link href=''>
                        <div className='flex gap-[22px] px-[30px] text-[#9C9C9C] hover:bg-[#F7F7F7] hover:text-[#222222] transition duration-100 ease py-[12px] rounded my-1'>
                            <span> <RiSendPlane2Fill  className='w-[19px] h-[23px]' /></span>
                            <p className='text-[15px] cursor-pointer font-normal'>Enrolled Tips</p>
                        </div>
                    </Link>
                    <Link href=''>
                        <div className='flex gap-[22px] px-[30px] text-[#9C9C9C] hover:bg-[#F7F7F7] hover:text-[#222222] transition duration-100 ease py-[12px] rounded'>
                            <span> <IoMdStar  className='w-[22px] h-[23px]' /></span>
                            <p className='text-[15px] cursor-pointer font-normal'>Saved Tips</p>
                        </div>
                    </Link>

                </div>
                <hr className='my-7'/>
                <div className={`${roboto.className}  m-1.5`}>
                    <Link href=''>
                        <div className='flex gap-[22px] px-[30px] text-[#9C9C9C] hover:bg-[#F7F7F7] hover:text-[#222222] transition duration-100 ease py-[12px] rounded'>
                            <span> <MdSettingsSuggest className='w-[22px] h-[23px]' /></span>
                            <p className='text-[15px] cursor-pointer font-normal'>Account Settings</p>
                        </div>
                    </Link>
                    <Link href=''>
                        <div className='flex gap-[22px] px-[30px] text-[#9C9C9C] hover:bg-[#F7F7F7] hover:text-[#222222] transition duration-100 ease py-[12px] rounded mt-2'>
                            <span> <MdKeyboardCommandKey   className='w-[20px] h-[23px]' /></span>
                            <p className='text-[15px] cursor-pointer font-normal '>Preferences</p>
                        </div>
                    </Link>
                </div>
                <hr className='mt-7 mb-2' />
                <div className={`${roboto.className}  m-1.5`}>
                    <Link href=''>
                        <div className='flex gap-[22px] px-[30px] text-[#9C9C9C] hover:bg-[#F7F7F7] hover:text-[#FD5555] transition duration-300 ease py-[12px] rounded '>
                            <span> <IoMdLogOut className='w-[22px] h-[23px]' /></span>
                            <p className='text-[15px] cursor-pointer font-normal'>Sign Out</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProfileInfo;