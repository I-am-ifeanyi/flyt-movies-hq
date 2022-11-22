import React, { useState } from "react";
import HeroSection from "../HeroSection";
import Categories from "../components/Categories";
import { AiFillCaretRight } from "react-icons/ai";

const Home = () => {
  const [
    airingToday,
    onTheAir,
    topRated,
    errorMessage,
    trending,
    goToNextPage,
    count,
  ] = Categories();
  // const streamValues = Object.values(streaming)
  

  const [isClicked, setIsClicked] = useState(true);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const toggleBg = () => {
    setIsClicked(true);
    setIsClicked1(false);
    setIsClicked2(false);
    setIsClicked3(false);
  };
  const toggleBg1 = () => {
    setIsClicked(false);
    setIsClicked1(true);
    setIsClicked2(false);
    setIsClicked3(false);
  };
  const toggleBg2 = () => {
    setIsClicked(false);
    setIsClicked1(false);
    setIsClicked2(true);
    setIsClicked3(false);
  };
  const toggleBg3 = () => {
    setIsClicked(false);
    setIsClicked1(false);
    setIsClicked2(false);
    setIsClicked3(true);
  };

  var selectedCategory;
  if (isClicked) {
    selectedCategory = trending;
  } else if (isClicked1) {
    selectedCategory = onTheAir;
  } else if (isClicked2) {
    selectedCategory = topRated;
  } else if (isClicked3) {
    selectedCategory = airingToday;
  } else return selectedCategory;
  console.log(errorMessage);

  return (
    <>
      <div>
        <HeroSection />
        <div>
          <div className="mt-10 px-10">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold shrink-0">What's Popular</h1>
              <div className="flex items-center gap-5 shrink-0 ml-10  border border-[#1f2c3a] rounded-3xl transition-all duration-700 cursor-pointer">
                <p
                  className={`${
                    isClicked ? "bg-[#1f2c3a]" : null
                  } px-5 p-1 rounded-3xl font-bold tracking-wide transition-all duration-700 ${
                    isClicked ? "text-gray-100" : "text-[#1f2c3a]"
                  }`}
                  onClick={toggleBg}
                >
                  Trending
                </p>
                <p
                  className={`${
                    isClicked1 ? "bg-[#1f2c3a]" : null
                  } px-5 p-1 rounded-3xl font-bold tracking-wide transition-all duration-700 ${
                    isClicked1 ? "text-gray-100" : "text-[#1f2c3a]"
                  }`}
                  onClick={toggleBg1}
                >
                  On TV
                </p>
                <p
                  className={`${
                    isClicked2 ? "bg-[#1f2c3a]" : null
                  } px-5 p-1 rounded-3xl font-bold tracking-wide transition-all duration-700 ${
                    isClicked2 ? "text-gray-100" : "text-[#1f2c3a]"
                  }`}
                  onClick={toggleBg2}
                >
                  Top Rated
                </p>
                <p
                  className={`${
                    isClicked3 ? "bg-[#1f2c3a]" : null
                  } px-5 p-1 rounded-3xl font-bold tracking-wider transition-all duration-700 ${
                    isClicked3 ? "text-gray-100" : "text-[#1f2c3a]"
                  }`}
                  onClick={toggleBg3}
                >
                  Airing Today
                </p>
              </div>
            </div>
            <div className="flex mb-20 gap-4 overflow-y-scroll">
              {selectedCategory.map((result) => {
                return (
                  <div
                    className=" mt-10 relative  transition-all duration-700"
                    key={result.id}
                  >
                    <figure className="h-60 w-44">
                      <a href="#" target="_blank">
                        <img
                          src={`http://image.tmdb.org/t/p/w500${result.poster_path}`}
                          alt="film poster"
                          className="w-full h-full rounded-xl border-b-4 border-green-400 "
                        />
                      </a>
                      <figcaption className="absolute border w-6 h-8 flex items-center justify-center text-gray-200 bg-gray-800 rounded-full z-40 -mt-5 ml-3 border-2 border-green-400 text-sm">
                        {Math.round(result.vote_average)}
                      </figcaption>
                    </figure>
                    <h1 className="mt-6 ml-3 font-extrabold">
                      {result.title
                        ? result.title
                        : result.name
                        ? result.name
                        : "Title Unavailable"}
                    </h1>
                    <p className="ml-3 text-sm">
                      {result.release_date
                        ? result.release_date
                        : result.first_air_date
                        ? result.first_air_date
                        : "Date unavailable"}
                    </p>
                  </div>
                );
              })}
              <button
                className="flex items-center gap-2 mx-5 border rounded-full m-auto p-5 bg-gray-800 text-gray-200 hover:translate-x-1 "
                onClick={goToNextPage}
              >
                More{" "}
                <AiFillCaretRight className="font-extrabold hover:translate-x-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// //  <img
// src={`http://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path : movie.profile_path }`}
// alt={movie.profile_path ? "Poster Image" : "Sorry, but image not available at the moment"}
// className="w-full h-full"
// />

export default Home;
