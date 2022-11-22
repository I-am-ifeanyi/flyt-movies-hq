import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { newContextAPI } from "../ContextAPI";

import Search from "../Search";

const GeneralSearchResults = () => {
  const { movieSearch, isLoading, isFetchNotFound, toggleDisplaySearch } = useContext(newContextAPI);
  const tvShowsArray = [];
  const moviesArray = []
  const personArray = []
  const [tvShowsCount, setTvShowsCount] = useState(0)
  const [moviesCount, setMoviesCount] = useState(0)
  const [personCount, setPersonCount] = useState(0)
  useEffect(() => {
    if (movieSearch.length > 0) {
      movieSearch
        .filter((movie) => movie.media_type === "tv")
        .map((movie) => tvShowsArray.push(movie));
        movieSearch
        .filter((movie) => movie.media_type === "movie")
        .map((movie) => moviesArray.push(movie));
        movieSearch
        .filter((movie) => movie.media_type === "person")
        .map((movie) => personArray.push(movie));
        setPersonCount(personArray.length)
        console.log(personArray)
        setTvShowsCount(tvShowsArray.length)
        setMoviesCount(moviesArray.length)
    }
  }, [toggleDisplaySearch]);


  return (
    <div className="">
      <Search />
      {isLoading && <h1 className="text-center mt-10 ">Loading...</h1>}
      <h1 className="text-center mt-10 ">{movieSearch.length < 1 ?  isFetchNotFound : null}</h1>
      <div className="flex gap-5 w-full p-5 justify-between">
        {movieSearch.length > 0 && (
          <div className="border rounded-xl w-auto max-h-[28rem]">
            <h1 className="p-4 w-full bg-[#1f2c3a] rounded-t-xl text-white font-bold text-xl">
              Search Results
            </h1>
            <div className="py-2 flex flex-col">
              <div className="flex justify-between items-center bg-slate-200 p-3">
                <p>TV Shows</p>{" "}
                <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                  {tvShowsCount}
                </p>
              </div>
              <div className="flex justify-between gap-48 items-center p-3 hover:bg-slate-200">
                <p>Movies</p>{" "}
                <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                  {moviesCount}
                </p>
              </div>
              <div className="flex justify-between p-3 hover:bg-slate-200">
                <p>People</p>{" "}
                <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                  {personCount}
                </p>
              </div>
              <div className="flex justify-between p-3 hover:bg-slate-200">
                <p>Collections</p>{" "}
                <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                 0
                </p>
              </div>
              <div className="flex justify-between p-3 hover:bg-slate-200">
                <p>Companies</p>{" "}
                <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                  0
                </p>
              </div>
              <div className="flex justify-between p-3 hover:bg-slate-200">
                <p>Keywords</p>{" "}
                <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                  0
                </p>
              </div>
              <div className="flex justify-between p-3 hover:bg-slate-200">
                <p>Networks</p>{" "}
                <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                  0
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-10 pr-10 mr-20  relative w-[95%] mb-28">
          {movieSearch
            .filter((movie) => movie.poster_path || movie.known_for && (movie.id))
            .map((movie) => {
              return (
                <div
                  className="flex items-center gap-10 ml-20 shrink-0 w-full hover:bg-black/5 transition-all duration-750 border-[#1f2c3a] shadow-xl "
                  key={movie.id}
                >
                  <div className="border w-[200px] h-[200px] bg-slate-400 p-1 rounded shrink-0">
                    <img
                      src={`http://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path : movie.profile_path }`}
                      alt={movie.profile_path ? "Poster Image" : "Sorry, but image not available at the moment"}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="py-5 flex flex-col justify-around pr-5 h-[200px]  hover:scale-105 transition-all duration-300">
                    <h1 className="text-xl font-bold ">
                      {movie.poster_path && movie.title ? movie.title : movie.poster_path ? "Title Unavailable" : movie.name} 
                    </h1>
                    <p className="text-sm font-extralight">
                      {movie.release_date || movie.first_air_date || movie.known_for_department} 
                    </p>
                    <p className="overflow-hidden">
                      {movie.overview ? movie.overview : movie.known_for ? movie.known_for.map(knownFor => knownFor.title) : null}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default GeneralSearchResults;
