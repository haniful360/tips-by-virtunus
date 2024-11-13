
import { Montserrat, Roboto } from "next/font/google";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
const montserrat = Montserrat({
    weight: ['600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const roboto = Roboto({
    weight: ['500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const upcomingTask = [
    { id: 0, name: '3 Weekend Habits of Highly Successful People', number: '8 task' },
    { id: 1, name: 'How to Create a Marketing Plan | Step-by-Step Guide', number: '3task' },
    // { id: 2, name: '5 Secrets to Become a Good Student', number: '3 task' },
];



import "react-datepicker/dist/react-datepicker.css";
import { RxPaperPlane } from "react-icons/rx";
import HiddenTask from "./HiddenTask";
const UpComingTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [taskStates, setTaskStates] = useState(upcomingTask.map(() => false));

    const handleClick = (id) => {
        const newTaskStates = taskStates.map((_, index) => (index === id ? true : false));
        setTaskStates(newTaskStates);
    };

    const handleClickOff = (id) => {
        const newTaskStates = taskStates.map((state, index) => (index === id ? false : state));
        setTaskStates(newTaskStates);
    };
    return (
        <div>
            <div>
                <span className={`${montserrat.className} text-[16px] font-medium`}>Select Date:</span> <DatePicker className="rounded-lg text-center text-[16px] hover:shadow-lg hover:bg-white bg-[#F1F1F2] border-2 border-[#D1E9FF] focus:outline-none transition duration-300" selected={startDate} dateFormat='MMMM yyyy'
                    onChange={(date) => setStartDate(date)} />
            </div>
            <div className={`${montserrat.className} lg:mt-8`}>
                <h2 className="font-bold text-[20px] mb-5">Today <br /> <span className="text-[#3161F1]">Mon, 15 January</span></h2>
                <h2 className="font-bold text-[18px] leading-[22px] text-[#222222] pb-4 border-b-2 border-[#DCDCDC] ">To-do</h2>
            </div>
            <div>
                {upcomingTask.map((task, index) => (
                    <div key={task.id}>
                        <div className={`${taskStates[index] ? 'rounded-t-[10px] bg-[#FFFFFF] p-[25px] mt-5 box-shadow relative' : 'bg-[#FFFFFF] p-[25px] rounded-[10px] mt-5 box-shadow relative'}`}>
                            <div className="lg:flex items-center gap-4 lg:w-[780px] lg:h-[85px] ">
                                <div className="">
                                    <input onClick={() => document.getElementById('my_modal_5').showModal()} type="checkbox" className='w-6 h-4' />
                                    <dialog id="my_modal_5" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <div> <HiddenTask /> </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn">X</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                                <div className=''>
                                    <h3 className={`${roboto.className} text-[#333333] pt-1 leading-[16px] text-[16px] font-semibold mb-8 `}>10 Ways You are Using Your Computer WRONG!

                                    </h3>
                                    <div className="md:flex items-center gap-2">
                                        <h3> <span className={`${montserrat.className} text-[#000000] font-bold text-[16px]`}>10 Task</span> <span className="text-[16px]"> to do today </span> </h3>
                                        <p className="w-[1px] h-[20px] mt-1.5 bg-[#DDDDDD]"></p>

                                        {taskStates[index] ? (
                                            <button onClick={() => handleClickOff(index)} className={`${montserrat.className} px-2 font-semibold text-[16px] text-[#4A77FD] mt-1 hover:text-[#7396FF] inline-block`}>
                                                Hide Task
                                            </button>
                                        ) : (
                                            <button onClick={() => handleClick((index))} className={`${montserrat.className} px-2 font-semibold text-[16px] text-[#4A77FD] mt-1 hover:text-[#7396FF] inline-block`}>
                                                View Task
                                            </button>
                                        )}

                                        <p className="w-[1px] h-[20px] mt-1.5 bg-[#DDDDDD]"></p>
                                        <div className=" md:w-[30px] h-[30px] flex items-center justify-center bg-[#4A77FD] rounded-full"><RxPaperPlane className="text-[#ffffff] text-[10px] lg:text-[14px]" /></div>
                                    </div>
                                </div>
                                <div className='absolute lg:top-10 bottom-0 right-8 w-[65px] h-[65px] flex items-center text-[16px]  justify-center border-[7px] border-[#F0F0F0] rounded-full'>
                                    <p>5%</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            {taskStates[index] ? <HiddenTask /> : ''}
                        </div>
                    </div>
                ))}
                {/* complete  */}
                <h2 className="font-bold text-[18px]  leading-[22px] text-[#222222] pb-4 border-b-2 border-[#DCDCDC] mt-[30px]">Complete</h2>
                <div className={`${taskStates ? `rounded-t-[10px] bg-[#FFFFFF] text-[#BBBAC7] p-[25px]  mt-5 box-shadow relative` : 'bg-[#FFFFFF] p-[25px] rounded-[10px] mt-5 box-shadow relative'}`}>
                    <div className="lg:flex items-center gap-4 lg:w-[780px] lg:h-[85px] text-[#BBBAC7] ">
                        <div className="">
                            <input type="checkbox" className='w-6 h-4' disabled />
                        </div>
                        <div className=''>
                            <h3 className={`${roboto.className}  pt-1 leading-[16px] text-[16px] font-semibold mb-8 `}>10 Ways You are Using Your Computer WRONG!

                            </h3>
                            <div className="md:flex items-center gap-2">
                                <h3> <span className={`${montserrat.className}  font-bold text-[16px]`}>10 Task</span> <span className="text-[16px]"> to do today </span> </h3>
                                <p className="w-[1px] h-[20px] mt-1.5 bg-[#DDDDDD]"></p>
                                <button className={`${montserrat.className} px-2 font-semibold text-[16px] inline-block`}>View Task</button>
                                <p className="w-[1px] h-[20px] mt-1.5 bg-[#DDDDDD]"></p>
                                <div className=" md:w-[30px] h-[30px] flex items-center justify-center bg-[#BBBAC7] rounded-full"><RxPaperPlane className="text-[#ffffff] text-[10px] lg:text-[14px]" /></div>
                            </div>
                        </div>
                        <div className='absolute lg:top-10 bottom-0 right-8 w-[65px] h-[65px] flex items-center justify-center border-[7px] border-[#BFBECA] rounded-full'>
                            <p className='text-black font-medium text-[16px]'>5%</p>
                        </div>
                    </div>

                </div>
                <div className={`${taskStates ? `rounded-t-[10px] bg-[#FFFFFF] text-[#BBBAC7] p-[25px]  mt-5 box-shadow relative` : 'bg-[#FFFFFF] p-[25px] rounded-[10px] mt-5 box-shadow relative'}`}>
                    <div className="lg:flex items-center gap-4 lg:w-[780px] lg:h-[85px] text-[#BBBAC7] ">
                        <div className="">
                            <input type="checkbox" className='w-6 h-4' disabled />
                        </div>
                        <div className=''>
                            <h3 className={`${roboto.className}  pt-1 leading-[16px] text-[16px] font-semibold mb-8 `}>10 Ways You are Using Your Computer WRONG!

                            </h3>
                            <div className="md:flex items-center gap-2">
                                <h3> <span className={`${montserrat.className}  font-bold text-[16px]`}>10 Task</span> <span className="text-[16px]"> to do today </span> </h3>
                                <p className="w-[1px] h-[20px] mt-1.5 bg-[#DDDDDD]"></p>
                                <button className={`${montserrat.className} px-2 font-semibold text-[16px] inline-block`}>View Task</button>
                                <p className="w-[1px] h-[20px] mt-1.5 bg-[#DDDDDD]"></p>
                                <div className=" md:w-[30px] h-[30px] flex items-center justify-center bg-[#BBBAC7] rounded-full"><RxPaperPlane className="text-[#ffffff] text-[10px] lg:text-[14px]" /></div>
                            </div>
                        </div>
                        <div className='absolute lg:top-10 bottom-0 right-8 w-[65px] h-[65px] flex items-center justify-center border-[7px] border-[#BFBECA] rounded-full'>
                            <p className='text-black font-medium text-[16px]'>5%</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpComingTask;