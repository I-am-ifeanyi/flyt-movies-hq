import React from "react";

import Search from "./Search";

const HeroSection = ({ backDrop }) => {
  return (
    <div
      className={`h-[400px] bg-[url('http://image.tmdb.org/t/p/w500${backDrop}')] transition-all duration-700  bg-cover bg-no-repeat px-10 py-10`}
    >
      <div className="flex flex-col h-full relative">
        <h1
          className="bg-black/50 p-2 text-5xl font-extrabold text-gray-100 hover:text-[#979090] transition-all duration-300 
        w-auto mb-2 absolute top-36 rounded shadow-2xl "
        >
          Welcome.
        </h1>
        <p className="text-3xl bg-black/50 px-3 rounded text-gray-100 hover:text-[#979090] transition-all duration-300   absolute top-56">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="p-1 bg-gradient-to-r font-bold from-gray-500 to-pink-100 shadow shadow-2xl  rounded-r-2xl  relative top-72">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
