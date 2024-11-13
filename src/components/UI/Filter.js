import React from 'react';
import { LuTimerReset } from "react-icons/lu";


const Filter = () => {
    return (
      
            <div className="lg:flex items-center justify-center lg:justify-start gap-4 mt-10">
                <div className="lg:w-[400px]">
                    <input type="text"
                        className="w-full h-[36px] border-2 rounded-md px-4 py-2 focus:outline-none focus:border-[#4A77FD] transition-all duration-500 bg-[#F1F1F2]"
                        placeholder="Search by tag" />
                </div>
                <div className="lg:w-[400px]">
                    <input type="text"
                        className=" w-full h-[36px] border-2 rounded-md px-4 py-2 focus:outline-none focus:border-[#4A77FD] transition-all duration-500 bg-[#F1F1F2]"
                        placeholder="Search by author" />
                </div>
                <div className="lg:w-[400px]">
                    <select
                        className="w-full h-[36px] border-2 rounded-md px-4 py-2 focus:outline-none focus:border-[#4A77FD] transition-all duration-500 bg-[#F1F1F2]"
                        defaultValue="" placeholder="Sort by" name="" id="">
                        <option className="bg-[#4a77fd75]" value="">Popular</option>
                        <option value="">Recent</option>
                    </select>
                </div>
                <div className="bg-[#F0F0F1]  w-[45px] px-4 rounded">
                <LuTimerReset  className='h-[36px] flex justify-center items-center hover:text-[#3161F1] py-4' />

                </div>

            </div>
    );
};

export default Filter;