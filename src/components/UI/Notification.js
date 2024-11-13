import { Montserrat } from 'next/font/google';
import React from 'react';
const montserrat = Montserrat({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})
const Notification = () => {
    return (
        <div className='absolute top-[86px] h-[520px] right-0 lg:right-[185px] bg-[#FFFFFF] w-10/12 lg:w-[400px] rounded-[7px]  border-[0.8px] border-[#F1F1F2]'>
            <div className='py-[10px] px-[20px]'>
                <h3 className={`${montserrat.className} text-[14px] text-[#000000] font-bold`}>Notifications</h3>
            </div>
            <hr className='bg-[#F0F0F0]' />
            <p className='flex items-center absolute top-0 right-0 bottom-0 left-0  justify-center text-[000000040] text-[14px]'>No Data</p>
        </div>
    );
};

export default Notification;