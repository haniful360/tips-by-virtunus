import Image from 'next/image';
import logo from '@/assets/logo.svg';
import './Header.css';
// import { CiSearch } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";



const Header = () => {
    return (
        <header>
            <div className="max-w-[1280px] mx-auto lg:px-0 px-2">
                <div className="py-[14px]">
                    <div className="lg:flex block justify-around items-center h-[56px] space-y-4 lg:space-y-0">
                        <div className="w-[220px] h-full">
                            <a href="/"><Image className="w-[110px] h-[50px] lg:mx-0" src={logo}
                                alt="./images/logo.svg" /></a>
                        </div>
                        <div className="lg:w-[420px] h-[55.2px] mx-auto relative">

                            <IoSearchOutline className="fa-solid fa-magnifying-glass absolute top-5 md:left-0 left-6 bottom-0 text-[#AFA7AB]"  />
                            {/* <IoSearchOutline /> */}

                            <input
                                className="w-full h-full lg:ml-[-25px] bg-[#f1f1f2] focus:outline-none focus:[#D1E9FF] focus:transition focus:duration-500 ease-in padding rounded-[43px] input-br"
                                type="text" placeholder=" Search ..."/>
                        </div>
                        <div>
                            <a href="/login.html"
                                className="lg:w-[163px] flex justify-center items-center h-[46px] mx-auto text-white font-bold text-[16px] py-[4px] px-[15px] bg-[#3161F1] mr-[20px] rounded-md hover:bg-transparent hover:border border-[#4A77FD] hover:text-[#4A77FD] transition duration-500 ease-in">Log
                                in</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;