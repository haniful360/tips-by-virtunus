"use client"
import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare, FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaUser } from "react-icons/fa";


const TipsCard = (props) => {
    const [isShow, setIsShow] = useState(false);
    const [userShow, setUserShow] = useState(false)

    const handleToggle = () => {
        setIsShow(!isShow);
        setUserShow(false);
    }
    const handleUserToggle = () => {
        setUserShow(!userShow)
        setIsShow(false);
    }


    const { name, picture } = props.book;


    return (
        <div className="bg-[#FFFFFF] relative p-5 shadow-lg h-[475px] rounded-md ">
            {/* img */}
            <div>
                <img className="w-full h-[290px] mx-auto mb-5"
                    src={picture}
                    alt="" />
            </div>

            <div>
                <div className="tooltip font-bold" data-tip="One Decesion">
                    <h3 className="text-[18px] text-[#000000] font-bold leading-7">One Decesion</h3>
                </div>
                <p onMouseEnter={handleUserToggle} id="user_name" className="text-[13px] text-[#9C9C9C] my-4">by {name} Category: Success</p>
            </div>
            <div className="space-x-8">
                <div className="tooltip tooltip-white font-bold" data-tip="Like Tips">
                    <button className=" text-[#151617] flex gap-2 items-center"><FaHeart className="hover:text-[#3161F1] text-[15px]" /> <span
                        className="text-[14px] font-normal">0</span></button>

                </div>
                <div className="tooltip tooltip-white font-bold" data-tip="Total Enrollment">
                    <button className="text-[15px]  text-[#151617] flex gap-2 items-center"><FaComment className='hover:text-[#3161F1]' />

                        <span
                            className="text-[14px] font-normal">0</span></button>
                </div>
                <div className="tooltip tooltip-white font-bold" data-tip="Share">

                    <button onClick={handleToggle}
                        className="text-[15px] hover:text-[#3161F1]  text-[#151617] flex gap-2 items-center"><FaShare /> <span
                            className="text-[14px] font-normal">Share</span>
                    </button>

                </div>

                {/* <!-- user followers --> */}
                {userShow && <div style={{marginLeft:'0px'}}
                    className="absolute top-56 left-0 lg:w-[376px] h-[145px] bg-[#FFFFFF] shadow-md rounded-md  p-5 z-20">
                    <div>
                        <div className="border-b pb-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="bg-[#f1f1f2] w-[57px] h-[57px] flex items-center justify-center rounded-full">
                                        <FaUser className='text-[28px]'/>
                                    </div>
                                    <h3 className="text-[16px] font-bold">Mike Bayer</h3>
                                </div>
                                <div>
                                    <button
                                        className="w-[100px] text-[#3161F1] px-4 py-1 outline outline-offset-2 outline-1 rounded-sm hover:bg-[#3161F1] hover:text-white text-[14px]transition duration-500 ease-in-out">Follow</button>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-between mt-2">
                            <div>
                                <span>0</span>
                                <span>Tips</span>
                            </div>
                            <div>
                                <span>0</span>
                                <span>Tips</span>
                            </div>
                            <div>
                                <span>0</span>
                                <span>Tips</span>
                            </div>

                        </div>
                    </div>
                </div>}

                {/* <!-- share social icons --> */}
                {isShow ? <div className='absolute  lg:top-40 top-28 right-8 lg:left-36 bg-[#FFFFFF] lg:w-[210px] rounded-md shadow-md pb-2 z-30'>
                    <h3 className="text-[18px] px-3 py-3 font-bold leading-7">Social Share</h3>
                    <div>
                        <div className="flex gap-5 items-center px-5 border-b py-2">
                            <div
                                className="bg-[#3B5998] flex items-center justify-center w-[30px] h-[30px] rounded-full">
                                <FaFacebook className='text-white' />
                            </div>
                            <span className="font-semibold text-[14px] text-[#000000D9]">Facebook</span>
                        </div>
                        <div className="flex gap-5 items-center px-5 border-b py-2">
                            <div
                                className="bg-[#00ACED] flex items-center justify-center w-[30px] h-[30px] rounded-full">
                                <FaTwitter className='text-white' />
                            </div>
                            <span className="font-semibold text-[14px] text-[#000000D9]">Twitter</span>
                        </div>
                        <div className="flex gap-5 items-center px-5 border-b py-2">
                            <div
                                className="bg-[#007FB1] flex items-center justify-center w-[30px] h-[30px] rounded-full">
                                <FaLinkedin className='text-white' />
                            </div>
                            <span className="font-semibold text-[14px] text-[#000000D9]">Facebook</span>
                        </div>
                        <div className="flex gap-5 items-center px-5  py-2">
                            <div
                                className="bg-[#FD2B55] flex items-center justify-center w-[30px] h-[30px] rounded-full">
                                <FaCopy className='text-white' />
                            </div>
                            <span className="font-semibold text-[14px] text-[#000000D9]">Copy Link</span>
                        </div>
                    </div>
                </div> : null}
            </div>
        </div>
    );
};

export default TipsCard;
