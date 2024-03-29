import React from "react";

import Search from "./Search";

const HeroSection = ({ trending }) => {
  // const filtered = trending.find((filtered) => filtered);
  const backdrop = trending[0]?.backdrop_path;
  const style = {
    backgroundImage: `linear-gradient(rgba(93, 109, 126), rgba(0, 0, 0, 0.3)), url('http://image.tmdb.org/t/p/w500${backdrop}')`,
    height: "400px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div
      className={`transition-all duration-700 bg-no-repeat md:px-10 py-10 relative md:bg-fixed`}
      style={style}
    >
      <div className="flex flex-col h-full relative">
        <h1
          className="p-2 text-5xl font-extrabold text-gray-100 hover:text-[#979090] transition-all duration-300 
        w-auto mb-2 absolute md:top-36 top-28 rounded shadow-2xl "
        >
          Welcome
        </h1>
        <p className="text-2xl md:text-3xl px-3 rounded text-gray-100 hover:text-[#979090] transition-all duration-300   absolute md:top-56 top-44">
          Millions of movies, TV shows and people to discover. Explore now!
        </p>
        <div className="p-1 bg-gradient-to-r font-bold from-gray-500 to-pink-100 shadow   md:rounded-r-2xl  relative top-72">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
