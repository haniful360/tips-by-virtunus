import Image from 'next/image';
import logo from '@/assets/logo.svg';
import smalllogo from '@/assets/small-logo.png';
import './Header.css';
// import { CiSearch } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { PiFilePlusLight } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";



const Header = () => {
    return (
        <header>
            <div className="max-w-[1280px] mx-auto lg:px-0 px-2">
                <div className="py-[14px]">
                    <div className="lg:flex block justify-around items-center h-[56px] space-y-4 lg:space-y-0">
                        <div className="w-[220px] h-full">

                            <a href="/"><Image src={logo} className="w-[110px] hidden sm:block h-[50px] lg:mx-0"
                                alt="./images/logo.svg" />
                                <Image className='sm:hidden w-10 h-10' src={smalllogo} alt="" />
                            </a>

                        </div>
                        <div className="lg:w-[420px] h-[55.2px] mx-auto relative">
                            <IoSearchOutline className="fa-solid fa-magnifying-glass absolute top-5 md:left-0 left-6 bottom-0 text-[#AFA7AB]" />
                            {/* <IoSearchOutline /> */}

                            <input
                                className="w-full h-full lg:ml-[-25px] bg-[#f1f1f2] focus:outline-none focus:[#D1E9FF] focus:transition focus:duration-500 ease-in padding rounded-[43px] input-br"
                                type="text" placeholder=" Search ..." />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <div className="flex items-center gap-[13px] bg-[#3161F1] lg:w-[136px]">
                                    <span><PiFilePlusLight />
                                    </span>
                                    <button>Create Tips</button>
                                </div>
                            </div>
                            <div>
                                <span><MdDashboard />
                                </span>
                            </div>
                            <div>
                                <button><IoIosNotifications />
                                </button>
                            </div>
                            <div>
                                {/* <Image className='sm:hidden w-10 h-10' src='' alt="" /> */}
                                <span><FaUserCircle />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;