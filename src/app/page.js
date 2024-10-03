'use client'
import TipsCard from "@/components/UI/TipsCard";
import Link from "next/link";
import { Montserrat } from 'next/font/google'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Category from "@/components/UI/Category";
import Filter from "@/components/UI/Filter";


const montserrat = Montserrat({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})


const Home = () => {
  const books = [
    {
      _id: "65a0d9a16be14defa86be28b",
      picture: "https://i.ytimg.com/vi/Bxv9lf5HjZM/maxresdefault.jpg",
      age: 25,
      name: "Moon Vargas"
    },
    {
      _id: "65a0d9a1067f326aefdaf63f",
      picture: "https://i.ytimg.com/vi/IbuKffs7wmg/maxresdefault.jpg",
      age: 29,
      name: "Wilkins Nelson"
    },
    {
      _id: "65a0d9a189329e2d0864c42f",
      picture: "https://i.ytimg.com/vi/wfePhIwodJQ/maxresdefault.jpg",
      age: 27,
      name: "Janell Martinez"
    },
    {
      _id: "65a0d9a110505f6dec04a93d",
      picture: "https://i.ytimg.com/vi/SELWtQpcy1A/maxresdefault.jpg",
      age: 22,
      name: "Kate Warren"
    },
    {
      _id: "65a0d9a137936392dadf5bd6",
      picture: "https://i.ytimg.com/vi/kiuf2U2KPVY/maxresdefault.jpg",
      age: 33,
      name: "Lisa Gordon"
    },
    {
      _id: "65a0d9a187b3d912460abad1",
      picture: "http://placehold.it/32x32",
      age: 26,
      name: "Antoinette Crane"
    },
    {
      _id: "65a0d9a12b8dc655df080926",
      picture: "https://i.ytimg.com/vi/fbAYK4KQrso/maxresdefault.jpg",
      age: 28,
      name: "Cruz Ruiz"
    },
    {
      _id: "65a0d9a19c35b49273bd47b4",
      picture: "https://i.ytimg.com/vi/hiyn_7sXI9I/maxresdefault.jpg",
      age: 40,
      name: "Mullen Bates"
    },
    {
      _id: "65a0d9a1b774a344f9c55009",
      picture: "https://i.ytimg.com/vi/4EljpMBicJE/maxresdefault.jpg",
      age: 39,
      name: "Cortez Bray"
    }
  ]
  const [isShowCategory, setIsShowCategory] = useState(false);
  const [isShowFilter, setIsShowFilter] = useState(false);

  const handleCategoryClick = () => {
    setIsShowCategory(!isShowCategory)
    setIsShowFilter(false);
  }

  const handleFilterClick = () => {
    setIsShowFilter(!isShowFilter);
    setIsShowCategory(false);
  }

  return (
    <main className="bg-[#F5F5F5] mt-[83px]">
      <section className="max-w-[1280px] mx-auto  relative">
        <div className="lg:flex lg:justify-between pt-[30px] px-5 lg:px-0">
          <div>
            <select defaultValue={'DEFAULT'} className="border text-[14px] text-[#000000D9] w-[120px] px-2 h-[33px] rounded-md" name=""
              id="">
              <option value="DEFAULT" className="text-[14px] text-[#000000D9]" >Books</option>
              <option value="">Auhor</option>
            </select>
          </div>
          <div className={`${montserrat.className} text-center lg:text-left space-x-7 pt-6 lg:pt-0 `}>
            <Link className="bg-[#ECEFF3] px-[20px] border py-[5px] inline-block leading-[22px] rounded-md text-[#151617] text-[14px] font-medium" href="#">All</Link>
            <Link className="text-[#151617] text-[14px] font-medium" href="interest">My Interest</Link>
            <Link className="text-[#151617] text-[14px] font-medium" href="popular">Popular</Link>
            <Link className="text-[#151617] text-[14px] font-medium" href="#">Trending</Link>
            <Link className="text-[#151617] text-[14px] font-medium" href="#">Recent</Link>

          </div>
          <div className={`${montserrat.className} absolute lg:static top-8 right-0 flex gap-2 pr-5 lg:pr-0`}>
            <div>
              <button onClick={handleCategoryClick}
                className="  border  border-[#ECEFF3] bg-[#ffffffba] lg:w-[106px] h-[33px] px-3 flex gap-2 items-center hover:border-[#40A8FE]  transition duration-300 rounded-md"><span className="font-semibold text-[13px]">Category</span>
                <IoIosArrowDown className="text-[#151617] font-bold" /></button>
            </div>
            <div>
              <button onClick={handleFilterClick} className="bg-[#ffffffba] border border-[#ECEFF3] lg:w-[92px] h-[33px] px-[15px] flex gap-2 items-center hover:border-[#40A8FE]  transition duration-300 rounded-md   "
                href="">
                <img className="w-[15px] h-[15px]" src="https://tips.virtunus.com/filter/filter.svg" alt="" /> <span
                  className="font-semibold text-[13px] text-[#151617]"> Filter</span>
              </button>
            </div>
          </div>

        </div>


        {/* <!-- hidden category --> */}
        {isShowCategory && <Category />}

        {/* <!-- filter hide option --> */}
        {isShowFilter && <Filter />}


        {/* <!-- card option --> */}
        <div className="mt-[40px] category-card relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
            {
              books.map(book => <TipsCard
                key={book._id}
                book={book}
              ></TipsCard>)
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;