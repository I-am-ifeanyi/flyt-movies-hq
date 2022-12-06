import React, { useState, useEffect } from "react";
import HeroSection from "../HeroSection";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";

import { MdStarRate, MdOutlineList } from "react-icons/md";
import { BsFillBookmarkPlusFill, BsFillSuitHeartFill } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";

const Home = () => {
  const [
    airingToday,
    onTheAir,
    topRated,
    errorMessage,
    trending,
    movies,
    tvShows,
    trendingID,
    topRatedID,
    style,
    style2,
    backdrop,
    topRatedTrailers,
    trendingTrailers,
    weeklyTrends,
    isTrendThisWeek,
    isTrendThisWeek1,
    isTrendThisWeek2,
    toggleTrendWeek,
    toggleTrendWeek1,
    toggleTrendWeek2,
    isClicked,
    isClicked1,
    isClicked2,
    isClicked3,
    toggleBg,
    toggleBg1,
    toggleBg2,
    toggleBg3,
    subActions,
    setSubActions,
    selectItem,
    isClicked4,
    isClicked5,
    toggleBg4,
    toggleBg5,
    selectedCategory,
    selectedMovieCategory,
  ] = Categories();

  // console.log(selectedCategory)

  return (
    <>
      <div
        className="mb-72"
        onClick={() => {
          if (subActions > 0) {
            setSubActions(0);
          } else return null;
        }}
      >
        <HeroSection trending={trending} />
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
            <div className="flex mb-20 gap-4 overflow-x-scroll h-[420px] relative">
              {selectedCategory.map((result) => {
                return (
                  <div
                    className=" mt-10 transition-all duration-700"
                    key={result.id}
                  >
                    {subActions === result.id ? (
                      <GiCancel
                        className="absolute bg-gray-100 rounded-full ml-36 mt-3 z-50 text-2xl hover:bg-gray-400"
                        onClick={() => selectItem(result.id)}
                      />
                    ) : (
                      <HiOutlineDotsCircleHorizontal
                        className="absolute bg-gray-100 rounded-full ml-36 mt-3 z-50 text-2xl hover:bg-gray-400"
                        onClick={() => selectItem(result.id)}
                      />
                    )}
                    <Link to={`/${result.id}`}>
                      <figure className="h-60 w-44">
                        <a href="#" target="_blank">
                          <img
                            src={`http://image.tmdb.org/t/p/w500${result.poster_path}`}
                            alt={result.title || result.name}
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
                    </Link>
                    {subActions === result.id && (
                      <div className="bg-gray-100 w-32 shadow-xl flex flex-col items-center justify-center -mt-64 ml-28 relative z-40 h-40 rounded">
                        <div className="flex w-full items-center border-b-2 py-2 hover:bg-slate-600 hover:text-gray-200 transition-all duration-500 ">
                          <MdOutlineList className="ml-3 mr-3 text-xl hover:scale-105" />{" "}
                          <p className="text-sm hover:scale-105">Add to list</p>
                        </div>
                        <div className="flex w-full items-center  border-b-2 py-2  hover:bg-slate-600 hover:text-gray-200 transition-all duration-500 ">
                          <BsFillSuitHeartFill className="mr-3 ml-4 hover:scale-105" />{" "}
                          <p className="text-sm hover:scale-105">Favorite</p>
                        </div>
                        <div className="flex w-full items-center  border-b-2 py-2  hover:bg-slate-600 hover:text-gray-200 transition-all duration-500 ">
                          <BsFillBookmarkPlusFill className="ml-3 mr-3 text-xl hover:scale-105" />{" "}
                          <p className="text-sm hover:scale-105">Watchlist</p>
                        </div>
                        <div className="flex w-full items-center py-2  hover:bg-slate-600 hover:text-gray-200 transition-all duration-500 ">
                          <MdStarRate className="ml-3 mr-3 text-xl hover:scale-105" />{" "}
                          <p className="text-sm hover:scale-105">Your Rating</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div>
              <div className="flex gap-10">
                <h1 className="text-2xl font-bold shrink-0 ">Free to watch</h1>
                <div className="flex items-center gap-5 font-bold border border-[#1f2c3a] rounded-3xl  cursor-pointer">
                  <p
                    className={`${
                      isClicked4 ? "bg-[#1f2c3a]" : null
                    } px-5 py-1 rounded-3xl font-bold tracking-wider  ${
                      isClicked4 ? "text-gray-100" : "text-[#1f2c3a]"
                    } `}
                    onClick={toggleBg4}
                  >
                    Movies
                  </p>
                  <p
                    className={`${
                      isClicked5 ? "bg-[#1f2c3a]" : null
                    } px-5 py-1 rounded-3xl font-bold tracking-wider  ${
                      isClicked5 ? "text-gray-100" : "text-[#1f2c3a]"
                    } `}
                    onClick={toggleBg5}
                  >
                    TV
                  </p>
                </div>
              </div>
              <div className="flex mb-20 gap-4 overflow-y-scroll">
                {selectedMovieCategory.map((result) => {
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
              </div>
            </div>
          </div>
        </div>
        <div style={style} className="opacity-90 mb-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold shrink-0 m-10 bg-black/50 text-gray-100 px-2 py-1 rounded">
              Video Clips
            </h1>
          </div>

          <div
            className={`transition-all duration-700 bg-no-repeat px-10 pb-10 w-full  flex gap-5 overflow-x-scroll`}
          >
            {trendingTrailers?.map((trailers) => {
              return (
                <div key={trailers.key} className="">
                  <iframe
                    width="350"
                    height="190"
                    src={`https://www.youtube.com/embed/${trailers?.key}`}
                    title={trailers.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl hover:scale-105 transition-all duration-500"
                  ></iframe>
                  <p className="text-center font-bold text-gray-100 mt-2 tracking-wider leading-3">
                    {trailers?.name}
                  </p>
                  <p className="text-center text-sm text-gray-100 mt-2 tracking-wider leading-3">
                    Published at {trailers.published_at.slice(0, 10)}
                  </p>
                  <p className="text-center text-sm text-gray-100 mt-2 tracking-wider leading-3">
                    This is a {trailers?.type}
                  </p>
                </div>
              );
            })}
            {topRatedTrailers?.map((trailers) => {
              return (
                <div key={trailers.key} className="">
                  <iframe
                    width="350"
                    height="190"
                    src={`https://www.youtube.com/embed/${trailers?.key}`}
                    title={trailers.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl hover:scale-105 transition-all duration-500"
                  ></iframe>
                  <p className="text-center font-bold text-gray-100 mt-2 tracking-wider leading-3">
                    {trailers?.name}
                  </p>
                  <p className="text-center text-sm text-gray-100 mt-2 tracking-wider leading-3">
                    Published at {trailers.published_at.slice(0, 10)}
                  </p>
                  <p className="text-center text-sm text-gray-100 mt-2 tracking-wider leading-3">
                    This is a {trailers?.type}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <div className="flex items-center px-10 mb-2">
            <h1 className="text-2xl font-bold shrink-0">Trending this week</h1>
            <div className="flex items-center gap-5 shrink-0 ml-10  border border-[#1f2c3a] rounded-3xl transition-all duration-700 cursor-pointer">
              <p
                className={`${
                  isTrendThisWeek ? "bg-[#1f2c3a]" : null
                } px-5 p-1 rounded-3xl font-bold tracking-wide transition-all duration-700 ${
                  isTrendThisWeek ? "text-gray-100" : "text-[#1f2c3a]"
                }`}
                onClick={toggleTrendWeek}
              >
                Movie
              </p>
              <p
                className={`${
                  isTrendThisWeek1 ? "bg-[#1f2c3a]" : null
                } px-5 p-1 rounded-3xl font-bold tracking-wide transition-all duration-700 ${
                  isTrendThisWeek1 ? "text-gray-100" : "text-[#1f2c3a]"
                }`}
                onClick={toggleTrendWeek1}
              >
                TV
              </p>
              <p
                className={`${
                  isTrendThisWeek2 ? "bg-[#1f2c3a]" : null
                } px-5 p-1 rounded-3xl font-bold tracking-wide transition-all duration-700 ${
                  isTrendThisWeek2 ? "text-gray-100" : "text-[#1f2c3a]"
                }`}
                onClick={toggleTrendWeek2}
              >
                Person
              </p>
            </div>
          </div>
          <div
            className="contrast-100 bg-bottom flex gap-5 overflow-x-scroll px-10 pb-10 w-full bg-no-repeat"
            style={style2}
          >
            {weeklyTrends
              .filter((res) => res.profile_path || res.poster_path)
              .map((result) => {
                return (
                  <div
                    className="pt-5 relative  transition-all duration-700 "
                    key={result.id}
                  >
                    <figure className="h-60 w-44">
                      <a href="#" target="_blank">
                        <img
                          src={`http://image.tmdb.org/t/p/w500${
                            result.poster_path || result.profile_path
                          }`}
                          alt={result.title || result.name}
                          className="w-full h-full rounded-xl border-b-4 border-green-400 "
                        />
                      </a>
                      <figcaption className="absolute border w-6 h-8 flex items-center justify-center text-gray-200 bg-gray-800 rounded-full z-40 -mt-5 ml-3 border-2 border-green-400 text-sm">
                        {Math.round(result.vote_average) ||
                          Math.round(result.popularity)}
                      </figcaption>
                    </figure>
                    <h1 className="mt-6 ml-3 font-extrabold tracking-wider pl-2 rounded">
                      {result.title
                        ? result.title
                        : result.name
                        ? result.name
                        : "Title Unavailable"}
                    </h1>
                    <p className="ml-3 text-sm pl-2">
                      {result.release_date
                        ? result.release_date
                        : result.first_air_date
                        ? result.first_air_date
                        : null}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
