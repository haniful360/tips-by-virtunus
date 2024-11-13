"use client"

import { Montserrat, Roboto } from "next/font/google";
import { RxPaperPlane } from "react-icons/rx";
import './page.css'
import React, { useState } from 'react';
import HiddenTask from "@/components/others/HiddenTask";
import TodayTask from "@/components/others/TodayTask";
import UpComingTask from "@/components/others/UpComingTask";
import OverDueTask from "@/components/others/OverdueTask";



const DashboardPage = (props) => {
    const { toggleState } = props;
  

    return (
        <section className=" lg:ml-[345px] ">
            <div className="pt-[50px]">
                <div className={`${toggleState === 1 ? 'block' : 'hidden'}`}>
                   <TodayTask/>
                </div>
                <div className={`${toggleState === 2 ? 'block' : 'hidden'}`}>
                <UpComingTask/>
                </div>
                <div className={`${toggleState === 3 ? 'block' : 'hidden'}`}>
                    <OverDueTask/>
                </div>
            </div>
        </section>
    );
};

export default DashboardPage;