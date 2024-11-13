// import React from 'react';
// import { IoIosArrowDown } from 'react-icons/io';
// import Link from "next/link";

// const FilterMenu = () => {
//     return (
//         <div className="lg:flex lg:justify-between pt-[30px] px-5 lg:px-0">
//           <div>
//             <select defaultValue={'DEFAULT'} className="border text-[14px] text-[#000000D9] w-[120px] px-2 h-[33px] rounded-md" name=""
//               id="">
//               <option value="DEFAULT" className="text-[14px] text-[#000000D9]" >Books</option>
//               <option value="">Auhor</option>
//             </select>
//           </div>
//           <div className={`${montserrat.className} text-center lg:text-left space-x-7 pt-6 lg:pt-0 `}>
//             <Link className="bg-[#ECEFF3] px-[20px] border py-[5px] inline-block leading-[22px] rounded-md text-[#151617] text-[14px] font-medium" href="#">All</Link>
//             <Link className="text-[#151617] text-[14px] font-medium" href="#">My Interest</Link>
//             <Link className="text-[#151617] text-[14px] font-medium" href="#">Popular</Link>
//             <Link className="text-[#151617] text-[14px] font-medium" href="#">Trending</Link>
//             <Link className="text-[#151617] text-[14px] font-medium" href="#">Recent</Link>

//           </div>
//           <div className={`${montserrat.className} absolute lg:static top-8 right-0 flex gap-2 pr-5 lg:pr-0`}>
//             <div>
//               <button onClick={handleCategoryClick}
//                 className="  border  border-[#ECEFF3] bg-[#ffffffba] lg:w-[106px] h-[33px] px-3 flex gap-2 items-center hover:border-[#40A8FE]  transition duration-300 rounded-md"><span className="font-semibold text-[13px]">Category</span>
//                 <IoIosArrowDown className="text-[#151617] font-bold" /></button>
//             </div>
//             <div>
//               <button onClick={handleFilterClick} className="bg-[#ffffffba] border border-[#ECEFF3] lg:w-[92px] h-[33px] px-[15px] flex gap-2 items-center hover:border-[#40A8FE]  transition duration-300 rounded-md   "
//                 href="">
//                 <img className="w-[15px] h-[15px]" src="https://tips.virtunus.com/filter/filter.svg" alt="" /> <span
//                   className="font-semibold text-[13px] text-[#151617]"> Filter</span>
//               </button>
//             </div>
//           </div>

//         </div>
//     );
// };

// export default FilterMenu;