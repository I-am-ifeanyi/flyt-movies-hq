import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { newContextAPI } from "./ContextAPI";

import { FaPlus, FaTimes } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const { displaySearch, toggleDisplaySearch, focusOnSearch } =
    useContext(newContextAPI);

  return (
    <div className="">
      <div className="bg-[#1f2c3a] text-gray-100 font-bold h-10 px-10 py-8 flex items-center cursor-pointer opacity-90 border-b-2 relative z-10">
        <Link to="/">
          {" "}
          <h1 className="text-xl mr-10 p-1 rounded bg-gradient-to-r flex from-purple-500 to-pink-500">
            FlyT HQ
          </h1>
        </Link>
        <ul className="nav-links text-sm mr-10">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li className=" transition-all duration-1000">
            Movies
            <ul className="nav-child-links border py-3 rounded hover:bg-[#1f2c3a] z-50">
              <Link to="Popular">
                <li className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1">
                  Popular
                </li>
              </Link>
              <Link to="Upcoming">
                <li className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1">
                  Upcoming
                </li>
              </Link>
            </ul>
          </li>
          <li>
            TV Shows
            <ul className="nav-child-links border py-3 rounded hover:bg-[#1f2c3a]">
              <Link to="Airing-Today">
                <li className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1">
                  Airing Today
                </li>
              </Link>
              <Link to="Top-Rated">
                <li className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1">
                  Top Rated
                </li>
              </Link>
            </ul>
          </li>
          <li>
            People
            <ul className="nav-child-links border py-3 rounded hover:bg-[#1f2c3a]">
              <Link to="Popular-People">
                <li className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1">
                  Popular People
                </li>
              </Link>
            </ul>
          </li>
          <li>
            More
            <ul className="nav-child-links border py-3 rounded hover:bg-[#1f2c3a]">
              <li className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1">
                Discussions
              </li>
              <li className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1">
                Support
              </li>
              <li className="hover:bg-[#141c24] px-5 py-2 rounded-lg  hover:transition-all hover:duration-500 hover:translate-y-1">
                API
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex ml-auto gap-10 items-center">
          <FaPlus />
          <h1 className="border px-1 rounded font-medium text-[12px]">EN</h1>
          <IoMdNotifications />
          <CgProfile />

          <Link to="searchResults">
            {" "}
            <AiOutlineSearch
              className="text-2xl text-[#AED6F1] font-bold"
              onClick={focusOnSearch}
            />
          </Link>
        </div>
      </div>
      {/* {displaySearch && <Search
        display={displaySearch}
        toggleDisplaySearch={toggleDisplaySearch}
      />} */}
    </div>
  );
};

export default Header;
