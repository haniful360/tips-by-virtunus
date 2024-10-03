import React from 'react';

const Category = () => {
    return (
        <div className="absolute max-w-3xl right-0 top-[70px] bg-white z-50 rounded shadow-lg pl-10 py-10">
            <div className="  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-5 z-50">
                <div className="flex flex-col gap-2">
                    <a className="text-[#3161F1]" href="">All</a>
                    <a href="">Goal</a>
                    <a href="">Personal</a>
                    <a href="">Development Time <br /> Management</a>
                </div>
                <div className="flex flex-col gap-2">
                    <a href="">Effectiveness</a>
                    <a href="">Leadership</a>
                    <a href="">Routing and habits</a>
                </div>
                <div className="flex flex-col gap-2">
                    <a href="">Focus</a>
                    <a href="">Marketing and PR</a>
                    <a href="">Sales and Trade</a>

                </div>
                <div className="flex flex-col gap-2">
                    <a href="">General</a>
                    <a href="">Mindful work</a>
                    <a href="">Success</a>
                </div>
            </div>
        </div>
    );
};

export default Category;