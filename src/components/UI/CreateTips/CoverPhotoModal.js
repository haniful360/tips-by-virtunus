import { Montserrat, Roboto } from 'next/font/google';
import React, { useState } from 'react';
import { FaCamera, FaCross } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const montserrat = Montserrat({
    weight: ['500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})

const CoverPhotoModal = () => {
    const [text, setText] = useState('');
    const [data, setData] = useState();
    return (
        <div className=' h-[656px] w-full rounded-[23px] z-30 bg-[#F5F5F5] '>

            <div className='rounded-t-[23px] bg-[#ffffff]'>
                <div className={` ml-[47px] ${montserrat.className}`}>
                    <h2 className=' text-[19px] inline-block font-bold border-b-[2.4px] border-[#3161F1] px-[27px] pb-[5px] pt-[27px]'>Upload</h2>
                </div>
            </div>

            <div>
                <label htmlFor='imgs' className={`flex justify-center items-center h-96 ${montserrat.className} `}>
                    <div className='text-center cursor-pointer'>
                        <p className='text-[18px]'>Drag a file here</p>
                        <p className='my-5'>or</p>
                        <p htmlFor='imgs' className='mx-auto w-[141px] h-[44px] border-[1.6px] font-bold text-[#3161F1] border-[#3161F1] flex items-center justify-center rounded-[5px] text-[13px] mb-4' >
                            Browse
                        </p>
                        <div className={` text-[#BDBDBD] ${roboto.className} `}>
                            <p>Maximum upload file size: 2 mb</p>
                            <p className='my-[10px]'>Minimum Image Resolution: 1280*700 px</p>
                            <p>Max Image Resolution: 1920*1080 px</p>
                        </div>
                    </div>
                    <input id='imgs' type="file" className='hidden' onChange={(e) => console.log(e.target.files)} />
                </label>
            </div>
        </div>
    );
};

export default CoverPhotoModal;