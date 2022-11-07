import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { FaPlus } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <>
    <div className="bg-[#1f2c3a] text-white font-bold h-10 pl-10 pr-5 py-8 flex items-center">
      <Link to="/">
        {" "}
        <h1 className="text-2xl mr-10">FlyT HQ</h1>
      </Link>
      <ul className="nav-links text-sm">
        <li className=" transition-all duration-1000">
          Movies
          <ul className="nav-child-links border py-3 rounded hover:bg-[#1f2c3a]">
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
      <div className="flex ml-auto gap-10 items-center text-lg">
        <FaPlus />
        <h1 className="border px-1 rounded font-medium text-sm">EN</h1>
        <IoMdNotifications />
        <h1 className="w-[30px] h-[30px] text-center border rounded-[50%]">
          I
        </h1>
        <AiOutlineSearch />
      </div>
    </div>
    <Search />
    </>
  );
};

export default Header;
