// import Link from 'next/link';
// import React, { useState } from 'react';
'use client'
import './Sidebar.css';
import { Lato, Montserrat } from 'next/font/google'
import { MdOutlineCalendarToday, MdToday } from "react-icons/md";
import { FaRegCalendarXmark } from "react-icons/fa6";
import Link from 'next/link';
// import { useState } from 'react';

const montserrat = Montserrat({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

const lato = Lato({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})


// const Sidebar = (props) => {
//     // console.log(props);
//     const { toggleState, setToggleState } = props;

//     const handlTtoggleTab = (index) => {
//         setToggleState(index);

//     }
//     return (
//         <div className='lg:w-[269px] sticky top-5 lg:fixed lg:top-20 h-full   border-r'>
//             <div className='pt-[60px] p'>
//                 <div>
//                     <h2 className={`${montserrat.className} px-2 lg:px-0 text-[11px] lg:text-[18px] md:leading-[22px] md:tracking-wider text-center lg:text-left uppercase lg:font-bold text-[#222222]`}> Task Dashboard
//                     </h2>
//                 </div>
//                 <div>
//                     <div className={`${lato.className} mt-[34px] px-2 lg:px-0`}>
//                         <Link onClick={() => handlTtoggleTab(1)} href='' className={`hover:text-[#8CA9FF] transition duration-200 flex items-center gap-2 lg:gap-[18px] pt-1.5 pb-2${toggleState === 1 ? 'text-blue-600':''}`}>
//                             <MdToday className='lg:text-[25px] opacity-50' />
//                             <span className='leading-[17px] text-[14px] font-bold hover:text-[#8CA9FF]'>Today</span>
//                         </Link>
//                         <Link onClick={() => handlTtoggleTab(2)} href='' className={`hover:text-[#8CA9FF] transition duration-200 flex items-center gap-2 lg:gap-[18px] pt-1.5 pb-2 my-2${toggleState === 2 ? 'text-white': ''}`}>
//                             <MdOutlineCalendarToday className='lg:w-[25px] lg:h-[25px] opacity-50' />
//                             <span className='leading-[17px] text-[14px] font-bold'>Upcoming</span>
//                         </Link>
//                         <Link onClick={() => handlTtoggleTab(3)} href='' className={`${toggleState === 3 ? 'text-[25px]': ''}hover:text-[#8CA9FF] transition duration-200 flex items-center gap-2 lg:gap-[18px] pt-1.5`}>
//                             <FaRegCalendarXmark className='lg:w-[25px] lg:h-[25px] opacity-50' />
//                             <span className='leading-[17px] text-[14px] font-bold hover:text-[#8CA9FF] '>Overdue</span>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Sidebar;


// ... (previous imports)

const Sidebar = (props) => {
    const { toggleState, setToggleState } = props;

    const handleToggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='lg:w-[269px] sticky top-5 lg:fixed lg:top-20 h-full border-r'>
            <div className='pt-[60px]'>
                <div>
                    <h2 className={`${montserrat.className} px-2 lg:px-0 text-[11px] lg:text-[18px] md:leading-[22px] md:tracking-wide text-center lg:text-left uppercase lg:font-bold text-[#222222]`}> Task Dashboard
                    </h2>
                </div>
                <div>
                    <div className={`${lato.className} mt-[34px] px-2 lg:px-0`}>
                        <Link href=''>
                            <button onClick={() => handleToggleTab(1)} className={`hover:text-[#8CA9FF] transition duration-200 flex items-center gap-2 lg:gap-[18px] pt-1.5 pb-2${toggleState === 1 ? ' text-[#3161F1]' : ''}`}>
                                <MdToday className='lg:w-[25px] lg:h-[25px]' />
                                <span className='leading-[17px] text-[14px] font-bold'>Today</span>
                            </button>
                        </Link>
                        <Link href=''>
                            <button onClick={() => handleToggleTab(2)} className={`hover:text-[#8CA9FF] transition duration-200 flex items-center gap-2 lg:gap-[18px] pt-1.5 pb-2 my-2${toggleState === 2 ? ' text-[#3161F1]' : ''}`}>
                                <MdOutlineCalendarToday className='lg:w-[25px] lg:h-[25px] ' />
                                <span className='leading-[17px] text-[14px] font-bold'>Upcoming</span>
                            </button>
                        </Link>
                        <Link href=''>
                            <button onClick={() => handleToggleTab(3)} className={`hover:text-[#8CA9FF] transition duration-200 flex items-center gap-2 lg:gap-[18px] pt-1.5 pb-2 my-2${toggleState === 3 ? ' text-[#3161F1] opacity-100' : ''}`}>
                                <MdOutlineCalendarToday className='lg:w-[25px] overdue lg:h-[25px] ' />
                                <span className='leading-[17px] text-[14px] font-bold '>Overdue</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
