'use client'
import { Montserrat, Roboto } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import './CreateTips.css';
import { useState } from "react";
import SelectCategory from "./SelectCategory";
import TitlePhotoUpload from "./TitlePhotoUpload";


const montserrat = Montserrat({
    weight: ['500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})


const CreateTips = ({ setIsShowTips }) => {
    

    return (
        <div className=" mx-auto  bg-[#FFFFFF] rounded-[20px] py-[17px]">
            {/* create tips */}
            <div className={`${montserrat.className} px-[34px] flex items-center justify-between`}>
                <h3 className="font-bold text-[18px]">Create Tips</h3>
            </div>

            {/* Tips title and photo upload and attachment
            <TitlePhotoUpload/> */}
            
        </div>
    );
};

export default CreateTips;