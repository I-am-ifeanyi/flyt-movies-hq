import React from "react";
import Search from "./Search";

const HeroSection = () => {
  return (
    <div className='h-[100vh] bg-[url("https://s.yimg.com/ny/api/res/1.2/IZa_5rVom.ExKWD6zBAEew--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://media.zenfs.com/en/vibe_128/ae6003a55d6a40fd6df4b45f079b9cde")] filter saturate-100 bg-cover bg-center bg-no-repeat px-10 py-10'>
      <div className="flex flex-col h-full relative">
        <h1 className="bg-black/50 p-2 text-5xl font-bold text-white hover:text-[#d4cdcd] transition-all duration-300 w-auto mb-2 absolute top-20 rounded shadow-2xl ">
          Welcome.
        </h1>
        <p className="text-xl text-white hover:text-[#d4cdcd] transition-all duration-300  absolute top-36">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className="p-1 bg-gradient-to-r from-gray-500 to-pink-100 shadow shadow-2xl  rounded-r-2xl  relative top-48">
          <Search />
        </div>
      </div>
    
    </div>
  );
};

export default HeroSection;
