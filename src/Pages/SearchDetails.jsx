import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { HiArrowsExpand } from "react-icons/hi";
import Tooltip from "@mui/material/Tooltip";

import { MdStarRate, MdOutlineList } from "react-icons/md";
import { BsFillBookmarkPlusFill, BsFillSuitHeartFill } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";

const SearchDetails = () => {
  const [itemDetails, setItemDetails] = useState([]);
  const [similarItems, setSimilarItems] = useState([]);
  const [category, setCategory] = useState("movie");
  const [isHovered, setIsHovered] = useState(false);
  const [movieOrTvCasts, setMovieOrTvCasts] = useState([]);
  const [movieOrTvVideos, setMovieOrTvVideos] = useState([]);
  const { searchDetails } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${category}/${searchDetails}?api_key=711b673e8a9d9a73798bfbd7f7e018b7&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          setCategory("tv");
        } else setItemDetails(data);
      });
  }, [searchDetails, category]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${category}/${searchDetails}/similar?api_key=711b673e8a9d9a73798bfbd7f7e018b7&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          setCategory("tv");
        } else setSimilarItems(data.results);
      });
  }, [searchDetails, category]);

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/${category}/${searchDetails}/credits?api_key=711b673e8a9d9a73798bfbd7f7e018b7&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieOrTvCasts(data?.cast));
  }, [searchDetails, category]);

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/${category}/${searchDetails}/videos?api_key=711b673e8a9d9a73798bfbd7f7e018b7&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieOrTvVideos(data.results));
  }, []);

  const style = {
    backgroundImage: `url('http://image.tmdb.org/t/p/w500${itemDetails.backdrop_path}')`,

    backgroundSize: "cover",
    marginBottom: "100px",
  };
  const toggleIsHoveredTrue = () => {
    setIsHovered(true);
  };

  const toggleIsHoveredFalse = () => {
    setIsHovered(false);
  };

  const fullDate = itemDetails?.release_date || itemDetails.first_air_date;
  const year = fullDate?.substring(0, 4);

  const genresArray = itemDetails?.genres;

  const genre = genresArray?.map((items, index) => (
    <p key={index}>{items?.name}</p>
  ));

  const creatorsArray = itemDetails?.created_by;

  console.log(similarItems);

  return (
    <>
      <div className="relative">
        <ul className="py-5 text-2xl text-center ">
          <li></li>
        </ul>

        <div className="ml-10 mt-10 -mb-[40rem] flex gap-10 items-center ">
          <figure
            className=" w-[350px] relative shrink-0 z-50 "
            onMouseLeave={toggleIsHoveredFalse}
          >
            {isHovered && (
              <label className="text-gray-100 flex items-center justify-center gap-3 z-50 absolute top-[45%] left-[35%] bg-blue-900 p-1 rounded transition-all duration-700">
                <HiArrowsExpand className="text-2xl" />{" "}
                <a
                  href={`http://image.tmdb.org/t/p/w500${itemDetails.poster_path}`}
                  target="_blank"
                >
                  <p className="">View Image</p>
                </a>
              </label>
            )}
            <img
              src={`http://image.tmdb.org/t/p/w500${itemDetails.poster_path}`}
              alt={`${itemDetails.title || itemDetails.name} Poster`}
              className="w-full h-full rounded-t-xl hover:blur transition-all duration-500"
              onMouseEnter={toggleIsHoveredTrue}
            />
            <a
              href={itemDetails.homepage ? itemDetails.homepage : null}
              target="_blank"
            >
              <figcaption className="flex justify-center items-center gap-5 py-3 bg-blue-900 rounded-b-xl transition-all duration-500 hover:bg-blue-800">
                <AiOutlinePlayCircle className="text-4xl text-red-600 border p-1 shadow-black font-bold" />
                <div className="text-gray-100 leading-none">
                  <h1 className="">Now Streaming</h1>
                  <h1 className="font-bold mt-1">Watch Now</h1>
                </div>
              </figcaption>
            </a>
          </figure>

          <aside className="z-50 flex flex-col gap-5 shrink-0 px-10 mx-10 text-gray-100 font-bold  bg-black/30 py-10 tracking-wider">
            <div className="">
              <div className="flex gap-1 items-center text-3xl ">
                <h1 className="">{itemDetails.title || itemDetails.name}</h1>
                <p>({year})</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="border rounded px-1">16</p>
                <div className="flex gap-2 mx-2">{genre}</div>
                <p>50m</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              {itemDetails.vote_average && (
                <div className="flex gap-1 items-center">
                  <p className="w-14 h-14 flex items-center justify-center text-xl border-4 rounded-full bg-blue-900 ">
                    {itemDetails.vote_average.toFixed(1)}
                  </p>
                  <p className="tracking leading-5 text-sm">
                    Vote
                    <br /> Average
                  </p>
                </div>
              )}
              <ul className="flex gap-6">
                <Tooltip title="Add to list" arrow>
                  <li className="text-xl h-10 w-10 bg-gray-800 rounded-full grid place-content-center">
                    <MdOutlineList />
                  </li>
                </Tooltip>
                <Tooltip title="Mark as favorite" arrow>
                  <li className=" h-10 w-10 bg-gray-800 rounded-full grid place-content-center">
                    <BsFillSuitHeartFill />
                  </li>
                </Tooltip>
                <Tooltip title="Add to your watchlist" arrow>
                  <li className=" h-10 w-10 bg-gray-800 rounded-full grid place-content-center">
                    <BsFillBookmarkPlusFill />
                  </li>
                </Tooltip>
                <Tooltip title="Rate It!" arrow>
                  <li className=" h-10 w-10 bg-gray-800 rounded-full grid place-content-center">
                    <MdStarRate />
                  </li>
                </Tooltip>
              </ul>
            </div>
            <div className="shrink-0">
              <i className="text-sm">{itemDetails.tagline}</i>
              {itemDetails.overview && (
                <h1 className="text-xl font-bold mt-3">Overview</h1>
              )}
              <p className="font-light max-w-[30%]">{itemDetails.overview}</p>
              <div className="flex gap-20 items-center mt-10">
                {creatorsArray?.map((items) => {
                  return (
                    <div className="flex flex-col items-center">
                      <figure className="w-[150px] h-[150px] mb-2">
                        <img
                          src={`http://image.tmdb.org/t/p/w500${items.profile_path}`}
                          alt={`${items.name} picture`}
                          className="w-full h-full hover:scale-105 transition-all duration-500 rounded"
                        />
                      </figure>
                      <p key={items.id} className="">
                        {items.name}
                      </p>
                      <i className="font-extralight">Creator</i>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
        <section
          className="border-4 h-screen border-green-500 blur-sm"
          style={style}
        ></section>
      </div>

      <section className="flex gap-8 px-10 mb-10">
        <div className="w-3/4">
          <h1 className="text-2xl font-bold my-2">{`${
            category === "movie" ? "Movie" : "Series"
          }  Cast`}</h1>
          <div className="flex gap-5 overflow-x-scroll py-3">
            {movieOrTvCasts
              ?.filter((casts) => casts.profile_path)
              .map((cast) => {
                return (
                  <div className="border h-auto rounded shadow-lg flex flex-col items-center">
                    <figure className="w-[150px] h-[200px]">
                      <img
                        src={`http://image.tmdb.org/t/p/w500${cast.profile_path}`}
                        alt={cast.name}
                        className="w-full h-full rounded-t"
                      />
                    </figure>
                    <h3 className="font-bold text-center">{cast.character}</h3>
                    <h5>{cast.original_name}</h5>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex flex-col border w-full px-2 justify-around shrink-0">
          <div>
            <p className="text-xl font-bold underline">Facts </p>
          </div>
          <div>
            <p>Status: </p>
            <span className="font-bold">
              {itemDetails.status ? itemDetails.status : "NA"}
            </span>
          </div>
          <div>
            <p>Networks: </p>
            {itemDetails.networks ? (
              <span className="font-bold">
                {itemDetails?.networks?.map((items) => {
                  return (
                    <div className="flex gap-3">
                      <span>{items.name}</span>
                      <figure className="w-[100px] h-[30px]">
                        <img
                          src={`http://image.tmdb.org/t/p/w500${items.logo_path}`}
                          alt={items.name}
                          className="w-full h-full"
                        />
                      </figure>
                    </div>
                  );
                })}
              </span>
            ) : (
              <span className="font-bold">NA</span>
            )}
          </div>
          <div>
            <p>Type: </p>
            <span className="font-bold">
              {itemDetails.type ? itemDetails.type : "NA"}
            </span>
          </div>
          <div>
            <p>Original Language: </p>
            <span className="font-bold">
              {itemDetails.original_language
                ? itemDetails.original_language
                : "NA"}
            </span>
          </div>
          <div>
            <p>Budget: </p>
            <span className="font-bold">
              {itemDetails.budget ? itemDetails.budget : "NA"}
            </span>
          </div>
          <div>
            <p>Revenue: </p>
            <span className="font-bold">
              {itemDetails.revenue ? itemDetails.revenue : "NA"}
            </span>
          </div>
        </div>
      </section>

      {movieOrTvVideos && <section className="mx-10 mb-10">
        <h1 className="text-2xl font-bold ">Media</h1>
        <div className="flex gap-3 my-4 overflow-x-scroll h-auto py-3">
          {movieOrTvVideos?.map((movies) => {
            return (
              <div key={movies.key} className=" flex flex-col">
                <iframe
                  width="350"
                  height="190"
                  src={`https://www.youtube.com/embed/${movies?.key}`}
                  title={movies.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl hover:scale-105 transition-all duration-500"
                ></iframe>
                <p className="font-bold text-gray-800 mt-2 tracking-wider leading-3">
                  {movies?.name}
                </p>
                <p className=" text-sm text-gray-800 mt-2 tracking-wider leading-3">
                  Published at {movies.published_at.slice(0, 10)}
                </p>
                <p className=" text-sm text-gray-800 mt-2 tracking-wider leading-3">
                  This is a {movies?.type}
                </p>
              </div>
            );
          })}
        </div>
      </section>}
      <section className="mx-10 mb-20">
        <h1 className="text-2xl font-bold">Recommendations</h1>
        <div className="flex gap-5 my-4 overflow-x-scroll pb-8">
          {similarItems?.map((items) => {
            return (
              <div className="shadow-lg">
                <figure className="w-[200px] h-[150px]">
                  <img
                    src={`http://image.tmdb.org/t/p/w500${items.poster_path}`}
                    alt={items.title || items.name}
                    className="w-full h-full rounded-md"
                  />
                  <figcaption className="text-lg">{items.title || items.name}</figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

//

export default SearchDetails;
