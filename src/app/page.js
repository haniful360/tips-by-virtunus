

import TipsCard from "@/components/UI/TipsCard";

const Home = async () => {
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
  return (
    <div>
      <main>
        <section className="max-w-[1280px] mx-auto mt-[30px] mb-[100px] relative">
          <div className="lg:flex justify-between mt-32 lg:mt-0">
            <div>
              <select defaultValue={'DEFAULT'}  className="border text-[14px] text-[#000000D9] w-[120px] px-2 h-[33px] rounded-md" name=""
                id="">
                <option value="DEFAULT" disabled className="text-[14px] text-[#000000D9]" >Books</option>
                <option value="">Auhor</option>
              </select>
            </div>
            <div className="space-x-8">
              <a className="bg-[#ECEFF3] px-[20px] py-2 rounded-md text-[#151617] text-[14px] font-medium" href="#">All</a>
              <a className="text-[#151617] text-[14px] font-medium" href="#">Popular</a>
              <a className="text-[#151617] text-[14px] font-medium" href="#">Trending</a>
              <a className="text-[#151617] text-[14px] font-medium" href="#">Recent</a>

            </div>
            <div className=" flex gap-2 z-50">
              <div className="">
                <button id="category"
                  className="font-semibold text-[13px] border px-3 py-1 flex gap-2 items-center hover:border-[#3161F1]  transition duration-500 ease-in rounded-md"><span>Category</span>
                  <i className="fa-solid fa-angle-down text-[#151617]"></i></button>

              </div>
              <div>
                <button id="filterBtn"
                  className="flex items-center gap-2 border py-1 px-3 rounded-md hover:border-[#3161F1]  transition duration-500 ease-in "
                  href="">
                  <i className="fa-solid fa-filter text-[#151617]"></i> <span
                    className="font-semibold text-[13px] text-[#151617]"> Filter</span>
                </button>
              </div>
            </div>

          </div>


          {/* <!-- hidden category --> */}

          <div id="content"
            className=" absolute max-w-3xl right-0 lg:mt-12 bg-white hidden rounded shadow-lg pl-10 py-5 z-50">
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


          {/* <!-- filter hide option --> */}
          <div id="filterContent" className="hidden">
            <div className="lg:flex items-center justify-center lg:justify-start gap-4 mt-10">
              <div className="lg:w-[400px]">
                <input type="text"
                  className="w-full h-[36px] border-2 rounded-md px-4 py-2 focus:outline-none focus:border-[#4A77FD] transition-all duration-500 bg-[#F1F1F2]"
                  placeholder="Search by tag" />
              </div>
              <div className="lg:w-[400px]">
                <input type="text"
                  className=" w-full h-[36px] border-2 rounded-md px-4 py-2 focus:outline-none focus:border-[#4A77FD] transition-all duration-500 bg-[#F1F1F2]"
                  placeholder="Search by author" />
              </div>
              <div className="lg:w-[400px]">
                <select
                  className="w-full h-[36px] border-2 rounded-md px-4 py-2 focus:outline-none focus:border-[#4A77FD] transition-all duration-500 bg-[#F1F1F2]"
                  defaultValue="" placeholder="Sort by" name="" id="">
                  <option className="bg-[#4a77fd75]" value="">Popular</option>
                  <option value="">Recent</option>
                </select>
              </div>
              <div className="bg-[#F0F0F1]  w-[45px] px-4] rounded">
                <i
                  className="fa-solid fa-ban h-[36px] flex justify-center items-center hover:text-[#3161F1]  py-4"></i>
              </div>

            </div>
          </div>



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
    </div>
  );
};

export default Home;