
"use client"
import Sidebar from '@/components/shared/Sidebar/Sidebar';
import React, { useState } from 'react';
import DashboardPage from './page';


// export const metadata = {
//     title: 'Dashboard',
//     description: 'Generated by create next app',
// }

const DashboardLayout = () => {
    const [toggleState, setToggleState] = useState(1);

    return (
        <section style={{boxShadow:'0px 20px 40px rgba(0,0,0,0.02)'}} className='bg-[#F9F9F9]'>
            <div className='max-w-7xl mx-auto mt-[85px] '>
                <div className='flex'>
                    <div className=''>
                        <Sidebar toggleState={toggleState} setToggleState={setToggleState} />
                    </div>
                    <div>
                        <DashboardPage toggleState={toggleState} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardLayout;