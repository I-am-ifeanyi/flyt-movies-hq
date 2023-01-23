import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { MdStarRate, MdOutlineList } from "react-icons/md";
import { BsFillBookmarkPlusFill, BsFillSuitHeartFill } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";

import Categories from "../components/Categories";
import ErrorPage from "./ErrorPage";

const TopRated = () => {
  const [popularPage, setPopularPage] = useState(1);
  const [popularArray, setPopularArray] = useState([]);
  const [isSortingState, setIsSortingState] = useState(false);
  const [isFilterState, setIsFilterState] = useState(false);

  const [isAction, setIsAction] = useState(false);
  const [isAdventure, setIsAdventure] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);
  const [isComedy, setIsComedy] = useState(false);
  const [isCrime, setIsCrime] = useState(false);
  const [isDocumentary, setIsDocumentary] = useState(false);
  const [isDrama, setIsDrama] = useState(false);
  const [isFamily, setIsFamily] = useState(false);
  const [isFantasy, setIsFantasy] = useState(false);
  const [isHistory, setIsHistory] = useState(false);
  const [isHorror, setIsHorror] = useState(false);
  const [isMusic, setIsMusic] = useState(false);
  const [isMystery, setIsMystery] = useState(false);
  const [isRomance, setIsRomance] = useState(false);
  const [isScienceFiction, setIsScienceFiction] = useState(false);
  const [isTvMovie, setIsTvMovie] = useState(false);
  const [isThriller, setIsThriller] = useState(false);
  const [isWar, setIsWar] = useState(false);
  const [isWestern, setIsWestern] = useState(false);

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
  ] = Categories();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=711b673e8a9d9a73798bfbd7f7e018b7&language=en-US&page=${popularPage}`
    )
      .then((res) => res.json())
      .then((data) => setPopularArray(data.results))
      .catch((error) => console.log(error));
  }, [popularPage]);

  const toggleSortingState = () => {
    setIsSortingState((prev) => !prev);
  };

  const toggleFilterState = () => {
    setIsFilterState((prev) => !prev);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [popularPage]);
  console.log(popularArray);

  return (
    <>
      <h1 className="text-2xl font-semibold mb-5 mt-10 px-5 md:px-10">
        Popular Movies
      </h1>
      {!popularArray ? (
        <ErrorPage />
      ) : (
        <div
          className="px-5 md:px-10 mb-28 flex md:flex-row flex-col gap-10 justify-between"
          onClick={() => {
            if (subActions > 0) {
              setSubActions(0);
            } else return null;
          }}
        >
          {popularArray && (
            <div className="md:w-1/3">
              <div className="flex flex-col gap-5">
                <div className="w-full rounded-lg border shadow-xl">
                  <div className="w-full h-auto border-b ">
                    <div
                      className="font-semi-bold border-b-2 p-3 flex items-center justify-between"
                      onClick={toggleSortingState}
                    >
                      <h1 className="">Sort</h1>
                      {isSortingState ? (
                        <MdKeyboardArrowDown className="font-extrabold text-xl" />
                      ) : (
                        <MdKeyboardArrowRight className="font-extrabold text-xl" />
                      )}
                    </div>
                    {isSortingState && (
                      <div className="p-3">
                        <h1 className="mb-2 font-extralight">
                          Sort results by
                        </h1>
                        <select className="p-2 w-full rounded-lg pr-3 bg-gray-200 text-sm">
                          <option value="Popularity Descending">
                            Popularity Descending
                          </option>
                          <option value="Popularity Ascending">
                            Popularity Ascending
                          </option>
                          <option value="Rating Ascending">
                            Rating Ascending
                          </option>
                          <option value="Rating Descending">
                            Rating Descending
                          </option>
                          <option value="Release Date Descending">
                            Release Date Descending
                          </option>
                          <option value="Release Date Ascending">
                            Release Date Ascending
                          </option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full rounded-lg border shadow-xl">
                  <div className="w-full h-auto border-b ">
                    <div
                      className="font-semi-bold border-b-2 p-3 flex items-center justify-between"
                      onClick={toggleFilterState}
                    >
                      <h1 className="">Sort</h1>
                      {isFilterState ? (
                        <MdKeyboardArrowDown className="font-extrabold text-xl" />
                      ) : (
                        <MdKeyboardArrowRight className="font-extrabold text-xl" />
                      )}
                    </div>
                    {isFilterState && (
                      <>
                        <div className="p-3 ">
                          <h1 className="mb-2 font-extralight">Show Me</h1>
                          <form
                            className="flex flex-col gap-2"
                            onSubmit={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <div className="border-b-2 pb-2 ">
                              <label
                                htmlFor="Everything"
                                className="flex items-center gap-1"
                              >
                                <input
                                  type="radio"
                                  value="Everything"
                                  name="filters"
                                  defaultChecked
                                />
                                Everything
                              </label>
                              <label
                                htmlFor="Movies I haven't Seen"
                                className="flex items-center gap-1"
                              >
                                <input
                                  type="radio"
                                  value="Movies I haven't Seen"
                                  name="filters"
                                />
                                Movies I haven't Seen
                              </label>
                              <label
                                htmlFor="Movies I Have Seen"
                                className="flex items-center gap-1"
                              >
                                <input
                                  type="radio"
                                  value="Movies I Have Seen"
                                  name="filters"
                                />
                                Movies I Have Seen
                              </label>
                            </div>
                            <div className="border-b-2 pb-2">
                              <h1 className="mb-2 font-extralight">
                                Availabilities
                              </h1>
                              <label
                                htmlFor="search All Availabilities?"
                                className="flex items-center gap-1"
                              >
                                <input
                                  type="checkbox"
                                  value="Search All Availabilities?"
                                  defaultChecked
                                />
                                Search All Availabilities?{" "}
                              </label>
                            </div>
                            <div className="border-b-2 pb-2 flex flex-col gap-3">
                              <h1 className="font-extralight">Release Dates</h1>
                              <label
                                htmlFor="search All Availabilities?"
                                className="flex items-center gap-1"
                              >
                                <input
                                  type="checkbox"
                                  value="Search All Availabilities?"
                                  defaultChecked
                                />
                                Search All Releases?{" "}
                              </label>
                              <label
                                htmlFor="from"
                                className="flex items-center justify-between text-sm font-extralight"
                              >
                                From
                                <input
                                  type="date"
                                  name="from"
                                  className="w-2/3 rounded-md p-1"
                                />
                              </label>
                              <label
                                htmlFor="To"
                                className="flex items-center justify-between text-sm font-extralight"
                              >
                                To
                                <input
                                  type="date"
                                  name="To"
                                  className="w-2/3 rounded-md p-1"
                                />
                              </label>
                            </div>
                            <div>
                              <h1 className="font-extralight">Genres</h1>
                              <div className="flex flex-wrap gap-2">
                                <button
                                  className={`${
                                    isAction && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsAction((prev) => !prev);
                                  }}
                                >
                                  Action
                                </button>
                                <button
                                  className={`${
                                    isAdventure && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsAdventure((prev) => !prev);
                                  }}
                                >
                                  Adventure
                                </button>
                                <button
                                  className={`${
                                    isAnimation && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsAnimation((prev) => !prev);
                                  }}
                                >
                                  Animation
                                </button>
                                <button
                                  className={`${
                                    isComedy && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsComedy((prev) => !prev);
                                  }}
                                >
                                  Comedy
                                </button>
                                <button
                                  className={`${
                                    isCrime && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsCrime((prev) => !prev);
                                  }}
                                >
                                  Crime
                                </button>
                                <button
                                  className={`${
                                    isDocumentary && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsDocumentary((prev) => !prev);
                                  }}
                                >
                                  Documentary
                                </button>
                                <button
                                  className={`${
                                    isDrama && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsDrama((prev) => !prev);
                                  }}
                                >
                                  Drama
                                </button>
                                <button
                                  className={`${
                                    isFamily && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsFamily((prev) => !prev);
                                  }}
                                >
                                  Family
                                </button>
                                <button
                                  className={`${
                                    isFantasy && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsFantasy((prev) => !prev);
                                  }}
                                >
                                  Fantasy
                                </button>
                                <button
                                  className={`${
                                    isHistory && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsHistory((prev) => !prev);
                                  }}
                                >
                                  History
                                </button>
                                <button
                                  className={`${
                                    isHorror && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsHorror((prev) => !prev);
                                  }}
                                >
                                  Horror
                                </button>
                                <button
                                  className={`${
                                    isMusic && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsMusic((prev) => !prev);
                                  }}
                                >
                                  Music
                                </button>
                                <button
                                  className={`${
                                    isMystery && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsMystery((prev) => !prev);
                                  }}
                                >
                                  Mystery
                                </button>
                                <button
                                  className={`${
                                    isRomance && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsRomance((prev) => !prev);
                                  }}
                                >
                                  Romance
                                </button>
                                <button
                                  className={`${
                                    isScienceFiction &&
                                    "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsScienceFiction((prev) => !prev);
                                  }}
                                >
                                  Science Fiction
                                </button>
                                <button
                                  className={`${
                                    isTvMovie && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsTvMovie((prev) => !prev);
                                  }}
                                >
                                  TV Movie
                                </button>
                                <button
                                  className={`${
                                    isThriller && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsThriller((prev) => !prev);
                                  }}
                                >
                                  Thriller
                                </button>
                                <button
                                  className={`${
                                    isWar && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsWar((prev) => !prev);
                                  }}
                                >
                                  War
                                </button>
                                <button
                                  className={`${
                                    isWestern && "bg-gray-800 text-gray-200"
                                  } border-2 py-1 px-2 rounded-3xl text-sm`}
                                  onClick={() => {
                                    setIsWestern((prev) => !prev);
                                  }}
                                >
                                  Western
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <button
                  value="submit"
                  className="border py-2 bg-gray-800 text-gray-200  rounded-3xl hover:bg-gray-700 text-lg"
                >
                  Search
                </button>
              </div>
            </div>
          )}
          <div className="md:w-2/3">
            <div className="flex justify-around mb-20 gap-4 flex-wrap relative">
              {popularArray &&
                popularArray
                  .filter(
                    (result) =>
                      result.poster_path && (result.title || result.name)
                  )
                  .map((result) => {
                    return (
                      <div
                        className="transition-all duration-700 w-[45%] md:w-1/4 border pb-1 rounded-lg bg-white md:hover:scale-105"
                        key={result.id}
                      >
                        {subActions === result.id ? (
                          <GiCancel
                            className="absolute bg-gray-100 rounded-full ml-2 mt-3 z-50 text-2xl hover:bg-gray-400"
                            onClick={() => selectItem(result.id)}
                          />
                        ) : (
                          <HiOutlineDotsCircleHorizontal
                            className="absolute bg-gray-100 rounded-full ml-2 mt-3 z-50 text-2xl hover:bg-gray-400"
                            onClick={() => selectItem(result.id)}
                          />
                        )}
                        <Link to={`/${result.id}`}>
                          <figure className="h-60 w-full">
                            <img
                              src={`http://image.tmdb.org/t/p/w500${result.poster_path}`}
                              alt={result.title || result.name}
                              className="w-full h-full rounded-t-xl border-b-4 border-green-400  transition-all duration-500 "
                            />
                            <figcaption className="absolute w-6 h-8 flex items-center justify-center text-gray-200 bg-gray-800 rounded-full z-40 -mt-5 ml-3 border-2 border-green-400 text-sm">
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
                          <div className="bg-gray-100 md:w-32 shadow-xl flex flex-col items-center justify-center md:-mt-64 md:ml-28 absolute z-40 h-40 rounded cursor-pointer -mt-64">
                            <div className="flex w-full items-center border-b-2 py-2 hover:bg-slate-600 hover:text-gray-200 transition-all duration-500 ">
                              <MdOutlineList className="ml-3 mr-3 text-xl hover:scale-105" />{" "}
                              <p className="text-sm hover:scale-105">
                                Add to list
                              </p>
                            </div>
                            <div className="flex w-full items-center  border-b-2 py-2  hover:bg-slate-600 hover:text-gray-200 transition-all duration-500 ">
                              <BsFillSuitHeartFill className="mr-3 ml-4 hover:scale-105" />{" "}
                              <p className="text-sm hover:scale-105">
                                Favorite
                              </p>
                            </div>
                            <div className="flex w-full items-center  border-b-2 py-2  hover:bg-slate-600 hover:text-gray-200 transition-all duration-500 ">
                              <BsFillBookmarkPlusFill className="ml-3 mr-3 text-xl hover:scale-105" />{" "}
                              <p className="text-sm hover:scale-105">
                                Watchlist
                              </p>
                            </div>
                            <div className="flex w-full items-center py-2  hover:bg-slate-600 hover:text-gray-200 transition-all duration-500 ">
                              <MdStarRate className="ml-3 mr-3 text-xl hover:scale-105" />{" "}
                              <p className="text-sm hover:scale-105">
                                Your Rating
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
            </div>
            <div className="flex gap-5 m-5">
              <button
                className="border px-5 py-1 bg-gray-800 text-gray-200 hover:bg-gray-600 rounded-md"
                onClick={() => {
                  setPopularPage((prev) => prev + 1);
                }}
              >
                Next Page
              </button>
              {popularPage > 1 && (
                <button
                  className="border px-5 py-1 bg-gray-800 text-gray-200 hover:bg-gray-600 rounded-md"
                  onClick={() => {
                    setPopularPage((prev) => prev - 1);
                  }}
                >
                  Previous Page
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopRated;
