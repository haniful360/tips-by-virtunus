import { Roboto } from 'next/font/google';
import React from 'react';

const roboto = Roboto({
    weight: ['500'],
    subsets: ['latin'],
    display: 'swap',
});
const HiddenTask = () => {
    const takses = [
        { id: 1, name: 'Not restarting your computer properly is a common mistake that you all might do often', once: 'Once', complete: "Complete" },
        { id: 2, name: 'Not reading the installation options sometimes gives you a very hard time. ', once: 'Once', complete: "Complete" },
        { id: 3, name: 'Not encrypting laptops is another major mistake that people make.        ', once: 'Once', complete: "Complete" },
        { id: 4, name: 'Never removing startup programs takes the users to some unintentional problematic issues.', once: 'Once', complete: "Complete" },

    ]
    return (
        <div className='border-t-2 rounded-b-[10px] border-[#DCDCDC] bg-[#FFFFFF] px-[30px]'>
            <div className="py-5" >
                {
                    takses.map(task => <div className='bg-[#FCFBFC]' key={task.id}>
                        <div className={`${roboto.className} px-[10px] py-[20px] border my-[10px] rounded-[5px] `}>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-3'>
                                    <div className='mt-3'>
                                        <input type="checkbox" className='w-4 h-4' />
                                    </div>
                                    <div>
                                        <div>
                                        <h2 className='font-medium text-[14px] text-[#222222]'>{task.name}</h2>
                                        <p className='text-[12px] h-[18px] m-0 p-0'>{task.once}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className='font-medium text-[13px]'>0/1 {task.complete}</span>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HiddenTask;