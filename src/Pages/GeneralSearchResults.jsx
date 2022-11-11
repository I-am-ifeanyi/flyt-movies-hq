import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { newContextAPI } from "../ContextAPI";

import Search from "../Search";

const GeneralSearchResults = () => {
  const { movieSearch, isLoading, isFetchNotFound } = useContext(newContextAPI);
  return (
    <div className="">
      <Search />
      {isLoading && <h1 className="text-center mt-10 ">Loading...</h1>}
      <h1 className="text-center mt-10 ">
        {isFetchNotFound}
      </h1>
      <div className="flex gap-5 w-full p-5 justify-between">
        <div className="border rounded-xl w-auto max-h-[28rem]">
          <h1 className="p-4 w-full bg-[#1f2c3a] rounded-t-xl text-white font-bold text-xl">
            Search Results
          </h1>
          <div className="py-2 flex flex-col">
            <div className="flex justify-between items-center bg-slate-200 p-3">
              <p>TV Shows</p>{" "}
              <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                5
              </p>
            </div>
            <div className="flex justify-between gap-48 items-center p-3 hover:bg-slate-200">
              <p>Movies</p>{" "}
              <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                5
              </p>
            </div>
            <div className="flex justify-between p-3 hover:bg-slate-200">
              <p>People</p>{" "}
              <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                5
              </p>
            </div>
            <div className="flex justify-between p-3 hover:bg-slate-200">
              <p>Collections</p>{" "}
              <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                5
              </p>
            </div>
            <div className="flex justify-between p-3 hover:bg-slate-200">
              <p>Companies</p>{" "}
              <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                5
              </p>
            </div>
            <div className="flex justify-between p-3 hover:bg-slate-200">
              <p>Keywords</p>{" "}
              <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                5
              </p>
            </div>
            <div className="flex justify-between p-3 hover:bg-slate-200">
              <p>Networks</p>{" "}
              <p className="px-3 font-bold rounded-lg bg-slate-300 text-[#1f2c3a]">
                5
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 pr-10 overflow-y-scroll relative left-[170px] mb-28">
          {movieSearch
            .filter((movie) => movie.poster_path && movie.id)
            .map((movie) => {
              return (
                <div
                  className="flex items-center gap-10 shrink-0 justify-between w-4/5 hover:bg-black/5 transition-all duration-750 border-[#1f2c3a] shadow-xl "
                  key={movie.id}
                >
                  <div className="border w-[200px] h-[200px] bg-slate-400 p-1 rounded shrink-0">
                    <img
                      src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt="Poster Image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="py-5 flex flex-col justify-around w-2/3 h-[200px]">
                    <h1 className="text-xl font-bold ">{movie.title ? movie.title : "Title Unavailable"}</h1>
                    <p className="text-sm font-extralight mb-5">
                      {movie.release_date || movie.first_air_date}
                    </p>
                    <p className="max-w-[70%] overflow-hidden">
                      {movie.overview}
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
