import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { newContextAPI } from "./ContextAPI";

import { FaPlus, FaTimes } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineCancel } from "react-icons/md"

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();


const Header = () => {
  const {
    displaySearch,
    toggleDisplaySearch,
    focusOnSearch,
    showNavLinks,
    toggleNavLinks,
  } = useContext(newContextAPI);
  

  return (
    <div className="flex items-center md:block p-2 md:p-0">
      <Link to="/">
        {" "}
        {!showNavLinks && (
          <h1
            className="text-xl md:mr-10 p-3 rounded bg-gradient-to-r  from-purple-500 to-pink-500 block md:hidden mx-5 text-gray-200 font-bold"
            data-aos="fade-left"
          >
            FlyT HQ
          </h1>
        )}
      </Link>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className={`${
          showNavLinks ? "flex" : "hidden"
        } bg-[#1f2c3a] text-gray-100 font-bold h-full md:h-10 md:px-10 py-8 md:flex  md:items-center cursor-pointer opacity-90 border-b-2 relative z-10 w-full text-2xl `}
      >
        <Link to="/">
          {" "}
          <h1 className="text-xl md:mr-10 p-1 rounded bg-gradient-to-r  from-purple-500 to-pink-500 hidden md:block">
            FlyT HQ
          </h1>
        </Link>
        <div
          className={`flex md:flex-row flex-col relative md:ml-auto md:justify-between md:w-full px-5 md:px-0 `}
        >
          <ul className="nav-links flex md:flex-row flex-col gap-[40px] relative text-xl mr-10">
            <Link to="/">
              <li onClick={toggleNavLinks}>Home</li>
            </Link>
            <li className=" transition-all duration-1000 flex">
              Movies
              <ul className="nav-child-links border bg-[#1f2c3a] py-3 rounded hover:bg-[#1f2c3a] z-50 md:mt-8 ml-32 md:-ml-3 w-[150px]">
                <Link to="Popular">
                  <li
                    className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1 text-lg border-b-2"
                    onClick={toggleNavLinks}
                  >
                    Popular
                  </li>
                </Link>
                <Link to="Upcoming">
                  <li
                    className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1 text-lg "
                    onClick={toggleNavLinks}
                  >
                    Upcoming
                  </li>
                </Link>
              </ul>
            </li>
            <li className=" transition-all duration-1000 flex">
              TV Shows
              <ul className="nav-child-links border py-3 rounded hover:bg-[#1f2c3a] md:mt-8 ml-32 md:-ml-3 w-[150px]">
                <Link to="Airing-Today">
                  <li
                    className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1 text-lg border-b-2"
                    onClick={toggleNavLinks}
                  >
                    Airing Today
                  </li>
                </Link>
                <Link to="Top-Rated">
                  <li
                    className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1 text-lg"
                    onClick={toggleNavLinks}
                  >
                    Top Rated
                  </li>
                </Link>
              </ul>
            </li>
            <li className=" transition-all duration-1000 flex">
              People
              <ul className="nav-child-links border py-3 rounded hover:bg-[#1f2c3a] md:mt-8 ml-32 md:-ml-3 md: w-[170px]">
                <Link to="Popular-People">
                  <li
                    className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1 text-lg"
                    onClick={toggleNavLinks}
                  >
                    Popular People
                  </li>
                </Link>
              </ul>
            </li>
            <li className=" transition-all duration-1000 flex">
              More
              <ul
                className="nav-child-links border py-3 rounded hover:bg-[#1f2c3a] md:mt-8 ml-32 md:-ml-3 w-[150px]"
                onClick={toggleNavLinks}
              >
                <li className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1 text-lg border-b-2">
                  Discussions
                </li>
                <li className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1 text-lg border-b-2">
                  Support
                </li>
                <li className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1 text-lg">
                  API
                </li>
              </ul>
            </li>
          </ul>
          <div className="flex md:flex-row flex-col gap-10 md:items-center mt-10 md:mt-0 text-xl">
            <FaPlus size={30} onClick={toggleNavLinks} />
            <h1
              className="border px-1 rounded font-medium md:text-[12px]"
              onClick={toggleNavLinks}
            >
              EN
            </h1>
            <IoMdNotifications size={30} onClick={toggleNavLinks} />
            <CgProfile size={30} onClick={toggleNavLinks} />

            <Link to="searchResults">
              {" "}
              <AiOutlineSearch
                className="text-2xl text-[#AED6F1] font-bold"
                size={30}
                onClick={focusOnSearch}
              />
            </Link>
          </div>
        </div>
        <MdOutlineCancel
          className="md:hidden  relative mr-5 ml-auto"
          size={40}
          onClick={toggleNavLinks}
        />
      </div>
      <GiHamburgerMenu
        className={`md:hidden ${
          !showNavLinks ? "block" : "hidden"
        } relative mr-5 ml-auto text-[#1f2c3a]`}
        size={40}
        onClick={toggleNavLinks}
      />
    </div>
  );
};

export default Header;
