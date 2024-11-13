'use client'
import { Montserrat, Roboto } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import './CreateTips.css';
import { FaList, FaLock, FaUsers } from "react-icons/fa";
import { useState } from "react";


const montserrat = Montserrat({
    weight: ['500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});


const SelectCategory = () => {
    const [isActive, setIsActive] = useState(null);
    const [selected, setSelected] = useState(false);
    
    const [isActive1, setIsActive1] = useState(false);
    const [selected1, setSelected1] = useState(null);
    const options = ['Business', 'Career', 'Contruction', 'Cooking', 'Daily Life', 'Education', 'Exercise', 'Farming', 'Finance', 'Gaming', 'Gardening'];
    const options1 = ['Public', 'Private', 'Unlisted'];
    const icons = [ <FaUsers />, <FaLock />, <FaList /> ]
    
    const handleClick = () => {
        setIsActive(!isActive);
        setIsActive1(false);
    }
    const handleClick1 = () => {
        setIsActive1(!isActive1);
        setIsActive(false);
        setIsActive(null)
    }
    
    return (
        <section>
            <div className={` ${montserrat.className} bg-[#F6F6F6] py-4 relative`}>
                <div className="flex justify-between items-center px-[34px] select-none">
                    <h3 className="font-bold text-[14px] text-[#000000D9]">Tips Title</h3>
                    <div className={`flex gap-[10px] z-20 absolute top-2  right-[32px] `}>
                        <div>
                            <div onClick={handleClick} className={`${roboto.className} ${isActive ? 'border-[1.6px] border-[#b7d4eb]' : ''} ${isActive == false ? 'border-[1.6px] border-[#b7d4eb]' : ''} bg-[#FFFFFF] w-[150px] h-[35.5px] border-[1.6px] border-[#F1F1F1] rounded-[6px] flex items-center justify-center ${selected && 'gap-8'} gap-2 text-[#7A7A7A]`}>
                                <button className="text-[14px] font-normal leading-[22px] h-[35.5px]">{selected ? selected : 'Select category'}</button>
                                <span><IoIosArrowDown /></span>
                            </div>
                            {isActive && <div className={`${roboto.className} overflow-auto text-[14px] h-[250px] leading-[30px] w-[145px] mx-auto`}>
                                <div className="bg-[#FFFFFF] shadow rounded transition duration-500  ">
                                    {
                                        options.map((option, index) => (<div onClick={(e) => {
                                            setSelected(option);
                                            setTimeout(() => {
                                                setIsActive(false)
                                            }, 200)
                                        }} key={index} className={`${selected === option ? 'bg-[#c7dff5d2] font-bold ' : ''} hover:bg-[#F6F6F6] transition duration-500 ease pl-3 py-[2px] animate-fade-in`}>{option}</div>))
                                    }
                                </div>
                            </div>}
                        </div>

                        {/* public private */}
                        <div>
                            <div onClick={handleClick1} className={`${roboto.className} ${isActive1 ? 'border-[1.6px] border-[#b7d4eb]' : ''} bg-[#FFFFFF] w-[130px] h-[35.5px] border-[1.6px] border-[#F1F1F1] rounded-[6px] flex items-center justify-center ${selected1 && 'gap-4'} gap-2 text-[#7A7A7A]`}>

                                <button className="text-[14px] font-normal leading-[22px] h-[35.5px]">{selected1 ? <span className="flex items-center gap-2">{selected1.icon}{selected1.option1}</span> :<span className="flex items-center gap-2">{icons[0]}Public</span>}</button>
                                <span><IoIosArrowDown /></span>
                            </div>
                            {isActive1 && <div className={`${roboto.className} text-[14px] leading-[30px] w-[125px] mx-auto`}>
                                <div className="bg-[#FFFFFF] shadow rounded transition duration-500  ">
                                    {

                                        options1.map((option1, index) => (<div onClick={(e) => {
                                            setSelected1({icon:icons[index], option1});
                                            setTimeout(() => {
                                                setIsActive1(false)
                                            }, 200)
                                        }} key={index} className={`${selected1 && selected1.option1 === option1 ? 'bg-[#c7dff5d2] font-bold ' : ''} hover:bg-[#F6F6F6] transition duration-500 ease pl-3 py-[2px] animate-fade-in`}> <p className="flex items-center gap-2">{icons[index]}{option1}</p> </div>))
                                    }
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SelectCategory;







// import { IoIosArrowDown } from "react-icons/io";
// import { FaList, FaLock, FaUsers } from "react-icons/fa";
// import { useState } from "react";

// const options = ['Business', 'Career', 'Construction', 'Cooking', 'Daily Life', 'Education', 'Exercise', 'Farming', 'Finance', 'Gaming', 'Gardening'];
// const options1 = ['Public', 'Private', 'Unlisted'];

// const icons = [<FaUsers />, <FaLock />, <FaList />];

// const SelectCategory = () => {
//     const [isActive, setIsActive] = useState(false);
//     const [selected, setSelected] = useState(null);

//     const [isActive1, setIsActive1] = useState(false);
//     const [selected1, setSelected1] = useState(null);

//     const handleClick = () => {
//         setIsActive(!isActive);
//         setIsActive1(false);
//     }

//     const handleClick1 = () => {
//         setIsActive1(!isActive1);
//         setIsActive(false);
//     }

//     return (
//         <section>
//             <div className="bg-[#F6F6F6] py-2">
//                 <div className="flex justify-between px-[34px] select-none">
//                     <h3 className="font-bold text-[14px] text-[#000000D9]">Tips Title</h3>
//                     <div className="flex gap-[10px]">
//                         <div>
//                             <div onClick={handleClick} className={`border-[1.6px] ${isActive ? 'border-[#b7d4eb]' : ''} bg-[#FFFFFF] w-[150px] h-[35.5px] border-[1.6px] border-[#F1F1F1] rounded-[6px] flex items-center justify-center ${selected && 'gap-8'} gap-2 text-[#7A7A7A]`}>
//                                 <button className="text-[14px] font-normal leading-[22px] h-[35.5px]">{selected ? selected : 'Select category'}</button>
//                                 <span><IoIosArrowDown /></span>
//                             </div>
//                             {isActive && (
//                                 <div className="overflow-auto text-[14px] h-[250px] leading-[30px] w-[145px] mx-auto">
//                                     <div className="bg-[#FFFFFF] shadow rounded transition duration-500">
//                                         {options.map((option, index) => (
//                                             <div
//                                                 key={index}
//                                                 onClick={() => {
//                                                     setSelected(option);
//                                                     setTimeout(() => {
//                                                         setIsActive(false);
//                                                     }, 200)
//                                                 }}
//                                                 className={`${selected === option ? 'bg-[#c7dff5d2] font-bold ' : ''} hover:bg-[#F6F6F6] transition duration-500 ease pl-3 py-[2px] animate-fade-in`}
//                                             >
//                                                 {option}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* public private */}
//                         <div>
//                             <div onClick={handleClick1} className={`border-[1.6px] ${isActive1 ? 'border-[#b7d4eb]' : ''} bg-[#FFFFFF]  w-[130px] h-[35.5px] border-[1.6px] border-[#F1F1F1] rounded-[6px] flex items-center justify-center ${selected1 && 'gap-0'} gap-2 text-[#7A7A7A]`}>
//                                 <button className="text-[14px] font-normal leading-[22px] h-[35.5px]">{selected1 ? <div className='flex gap-2 items-center'>{selected1.icon}{selected1.option1}</div> : <div className="flex items-center gap-2">{icons[0]}Public</div> }</button>
//                                 <span><IoIosArrowDown /></span>
//                             </div>
//                             {isActive1 && (
//                                 <div className="text-[14px] leading-[30px] w-[125px] mx-auto">
//                                     <div className="bg-[#FFFFFF] shadow rounded transition duration-500">
//                                         {options1.map((option1, index) => (
//                                             <div
//                                                 key={index}
//                                                 onClick={() => {
//                                                     setSelected1({ icon: icons[index], option1 });
                                                   
//                                                     setIsActive1(false);
//                                                 }}
//                                                 className={`${selected1 && selected1.option1 === option1 ? 'bg-[#c7dff5d2] font-bold ' : ''} hover:bg-[#F6F6F6] transition duration-500 ease pl-3 py-[2px] animate-fade-in`}
//                                             >
//                                                 <p className="flex items-center gap-2   ">
//                                                     {icons[index]}{option1}
//                                                 </p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SelectCategory;
