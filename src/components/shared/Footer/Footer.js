'use client'
import { Montserrat } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter, FaYoutube } from 'react-icons/fa';

import { FaArrowUp } from "react-icons/fa6";

const montserrat = Montserrat({
    weight: ['500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})
const Footer = () => {
    const [backToTop, setBackToTop] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            }
            else {
                setBackToTop(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <footer className='mt-16 bg-[#FFFFFF] shadow-2xl'>
            <div className={`${montserrat.className} max-w-7xl mx-auto flex justify-between py-7`}>
                <div className='text-[#222222] text-[14px]'>
                    <img className='w-[200px] h-[50px]' src='https://tips.virtunus.com/_next/image?url=%2Fvirtunus-logo.svg&w=256&q=75' alt="" />
                    <p className='mt-[15px]'>&copy; 2024 Virtunus. All rights reserved</p>
                </div>
                <div>
                    <p className='text-[16px] text-[#222222]'>Our Social Media</p>
                    <div className='flex gap-[10px] mt-[10px]'>
                        <div className='w-[31px] h-[31px] bg-[#222222] rounded-full flex items-center justify-center'>
                            <span><BsFacebook className='text-[#ffffff]' /></span>
                        </div>
                        <div className='w-[31px] h-[31px] bg-[#222222] rounded-full flex items-center justify-center'>
                            <span><FaTwitter className='text-[#ffffff]' /></span>
                        </div>
                        <div className='w-[31px] h-[31px] bg-[#222222] rounded-full flex items-center justify-center'>
                            <span><FaYoutube className='text-[#ffffff]' /></span>
                        </div>
                    </div>
                </div>
            </div>
            {backToTop && (<button onClick={scrollUp} className='fixed flex items-center justify-center bottom-5 right-[57px] w-[50px] h-[50px] bg-[#4D4D4F] border-[.8px] border-[#D9D9D9] rounded-[5px]'>
                <FaArrowUp className='w-[18px] h-6 text-[#FFFFFF]' />
            </button>)}
        </footer>
    );
};

export default Footer;