// "use client"
import { Roboto } from 'next/font/google';
import React, { useState } from 'react';
import { FaCamera, FaLink } from 'react-icons/fa';
import CoverPhotoModal from './CoverPhotoModal';
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const TitlePhotoUpload = () => {

    return (
        <section>
            <div className='px-[34px] bg-[#F6F6F6] relative '>
                <div className='bg-[#FFFFFF]'>
                    <textarea
                        // value={text}
                        // onChange={handleTextAreaChange}
                        // style={textAreaStyle}
                        className={`${roboto.className} resize-none w-full bg-[#FEFEFE] font-medium text-[22px] p-5 text-[#000000D9] outline-none border-t-[1px] border-[#EDEDED] rounded-t-[5px] leading-0`} placeholder='Title'>
                    </textarea>
                    <div className='flex gap-3 items-center pb-4'>

                        <div onClick={() => document.getElementById('my_modal_22').showModal()}><div className={`${roboto.className}`}>
                            <button className='px-[15px] py-1 w-[124px] h-[35px] flex items-center gap-[10px] bg-[#F2F2F2] rounded-[15.5px] text-[#848484] text-[13px]'> <FaCamera /> Cover photo</button>
                        </div></div>
                        <dialog id="my_modal_22" className="modal">
                            <div style={{ padding: '0px' }} className="modal-box w-12/12 max-w-2xl overflow-y-hidden h-full">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className=''>
                                    <CoverPhotoModal />
                                </div>
                            </div>
                        </dialog>

                        <div className={`${roboto.className}`}>
                            <button className='px-[15px] py-1 w-[124px] h-[35px] flex items-center gap-[10px] bg-[#F2F2F2] rounded-[15.5px] text-[#848484] text-[13px]'> <FaLink />Attachment</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* {coverPhoto && } */}
        </section>
    );
};

export default TitlePhotoUpload;


{/* <div className={`${roboto.className}`}>
    <label htmlFor="imgs" className='px-[15px] py-1 w-[124px] h-[35px] flex items-center gap-[10px] bg-[#F2F2F2] rounded-[15.5px] text-[#848484] text-[13px]'> <FaCamera /> Cover photo</label>
    <input id='imgs' type="file" className='hidden' onChange={(e) => console.log(e.target.files)} />
</div> */}