import React, { useState, useEffect } from "react";
import HeroSection from "../HeroSection";
import Categories from "../components/Categories";

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
    onTvID,
    topRatedID,
  ] = Categories();

  const [trendingTrailers, setTrendingTrailers] = useState([]);

  const [onTvTrailers, setOnTvTrailers] = useState([]);

  const [topRatedTrailers, setTopRatedTrailers] = useState([]);
  // const [backDrop, setBackDrop] = useState('')

  const APIKEY = "711b673e8a9d9a73798bfbd7f7e018b7";
  const trendingTrailerAPI = `https://api.themoviedb.org/3/movie/${trendingID}/videos?api_key=${APIKEY}&language=en-US`;
  const onTvVideosAPI = `https://api.themoviedb.org/3/tv/${onTvID}/videos?api_key=${APIKEY}&language=en-US`;
  const topRatedVideosAPI = `https://api.themoviedb.org/3/tv/${topRatedID}/videos?api_key=${APIKEY}&language=en-US`;

  useEffect(() => {
    fetch(trendingTrailerAPI)
      .then((res) => res.json())
      .then((res) => setTrendingTrailers(res.results));
  }, [trending]);

  useEffect(() => {
    fetch(onTvVideosAPI)
      .then((res) => res.json())
      .then((res) => setOnTvTrailers(res.results));
  }, [onTheAir]);

  useEffect(() => {
    fetch(topRatedVideosAPI)
      .then((res) => res.json())
      .then((res) => setTopRatedTrailers(res.results));
  }, [topRated]);
  // console.log(trendingTrailers);
  // console.log(onTvTrailers);
  // console.log(topRatedTrailers);

  const [isClicked, setIsClicked] = useState(true);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(true);
  const [isClicked5, setIsClicked5] = useState(false);

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

  const toggleBg4 = () => {
    setIsClicked4(true);
    setIsClicked5(false);
  };

  const toggleBg5 = () => {
    setIsClicked4(false);
    setIsClicked5(true);
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

  var selectedMovieCategory;
  if (isClicked4) {
    selectedMovieCategory = movies;
  } else if (isClicked5) {
    selectedMovieCategory = tvShows;
  } else return selectedMovieCategory;

  let backDrop;
  const bg = trending[0]
  backDrop = bg?.backdrop_path

 

  return (
    <>
      <div>
        <HeroSection backDrop={backDrop} />
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
        <div className="bg-cyan-600 mb-20 p-10">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold shrink-0">Latest Trailer</h1>
            <div className="flex items-center h-9 gap-5 shrink-0 ml-10  border border-[#1f2c3a] rounded-3xl transition-all duration-700 cursor-pointer">
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

          <div className="w-full h-96  flex gap-5 overflow-y-scroll mt-10">
            {trendingTrailers
              ?.filter(
                (trailers) =>
                  trailers.type === "Trailer" &&
                  trailers.name === "Official Trailer"
              )
              .map((trailers) => {
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
