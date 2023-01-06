import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { HiArrowsExpand } from "react-icons/hi";
import Tooltip from "@mui/material/Tooltip";

import { MdStarRate, MdOutlineList } from "react-icons/md";
import { BsFillBookmarkPlusFill, BsFillSuitHeartFill } from "react-icons/bs";
import {
  AiOutlinePlayCircle,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCircleNotch } from "react-icons/fa";

const SearchDetails = () => {
  const [itemDetails, setItemDetails] = useState([]);
  const [similarItems, setSimilarItems] = useState([]);
  const [category, setCategory] = useState("movie");
  const [isHovered, setIsHovered] = useState(false);
  const [movieOrTvCasts, setMovieOrTvCasts] = useState([]);
  const [movieOrTvVideos, setMovieOrTvVideos] = useState([]);
  const [isOverviewHovered, setIsOverviewHovered] = useState(true);
  const [isMediaHovered, setIsMediaHovered] = useState(true);
  const [isRecommendationsHovered, setIsRecommendationsHovered] =
    useState(true);
  const [personsArray, setPersonsArray] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
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

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/person/${searchDetails}?api_key=711b673e8a9d9a73798bfbd7f7e018b7&language=en-US&append_to_response=credits`)
      .then((res) => res.json())
      .then((data) => setPersonsArray(data));
  }, [searchDetails]);

  const style = {
    backgroundImage: `linear-gradient(rgba(93, 109, 126), rgba(0, 0, 0, 0.623)), url('http://image.tmdb.org/t/p/w500${itemDetails.backdrop_path}')`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
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

  const toggleSeeMore = () => {
    setSeeMore((prev) => !prev);
  };
  console.log(personsArray);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [category, searchDetails]);

  return (
    <>
      <div className="relative">
        <ul
          className="text-xl gap-10 flex justify-center relative my-3 cursor-pointer text-gray-900"
          onClick={() =>
            alert(
              "This is a placeholder link for now, adequate features  will be  added in due time. Thank you!"
            )
          }
        >
          <li className=" flex items-center hover:text-purple-500 hover:translate-y-1 transition-all duration-500 ">
            Overview <IoMdArrowDropdown className="text-xl" />
          </li>

          <li className=" flex items-center hover:text-purple-500 hover:translate-y-1 transition-all duration-500">
            Media <IoMdArrowDropdown className="text-xl" />
          </li>

          <li className=" flex items-center hover:text-purple-500 hover:translate-y-1 transition-all duration-500">
            Recommendations <IoMdArrowDropdown className="text-xl" />
          </li>
        </ul>

        {!personsArray.gender && !personsArray.profile_path ? (
          <section className="border-4 h-[600px] border-[#1f2c3a] relative">
            <div className="h-full w-full absolute" style={style}>
              <div className="flex gap-10 justify-center items-center h-full px-10">
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

                <aside className="z-50 flex flex-col gap-5 px-10  text-gray-100 font-bold max-h-screen  bg-black/30 py-10 tracking-wider ">
                  <div className="">
                    <div className="flex gap-1 items-center text-3xl ">
                      <h1 className="">
                        {itemDetails.title || itemDetails.name}
                      </h1>
                      <p>({year})</p>
                    </div>
                    <div className="flex gap-1 items-center shrink-0">
                      <p className="border rounded px-1">16</p>
                      <div className="flex gap-2 mx-2 shrink-0">{genre}</div>
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
                    <ul className="flex gap-5">
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
                  <div>
                    <i className="text-sm">{itemDetails.tagline}</i>
                    {itemDetails.overview && (
                      <h1 className="text-xl font-bold mt-3">Overview</h1>
                    )}
                    <p className="font-light w-full shrink-0">
                      {itemDetails.overview}
                    </p>
                    <div className="flex gap-20 items-center mt-10">
                      {creatorsArray?.map((items) => {
                        return (
                          <div className="flex flex-col items-center">
                            <figure className="w-[100px] h-[100px] mb-2">
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
            </div>
          </section>
        ) : (
          <section className="my-20 px-10 relative">
            <div className="flex gap-10">
              <div>
                <Tooltip title={personsArray.homepage ? personsArray.homepage : "Website is Unavailable"} arrow>
                  <figure className="w-[300px] h-[500px] shrink-0">
                    <a href={personsArray.homepage} target="_blank">
                      <img
                        src={`http://image.tmdb.org/t/p/w500${personsArray.profile_path}`}
                        alt={`${personsArray.name} picture`}
                        className="w-full h-full hover:scale-105 transition-all duration-500 rounded"
                      />
                    </a>
                  </figure>
                </Tooltip>
                <div className="mt-5 flex flex-col gap-5">
                  <div className="flex gap-3 text-3xl">
                    <Tooltip title="Visit Facebook" arrow>
                      <span>
                        <AiFillFacebook />
                      </span>
                    </Tooltip>
                    <Tooltip title="Visit Twitter" arrow>
                      <span>
                        <AiOutlineTwitter />
                      </span>
                    </Tooltip>
                    <Tooltip title="Visit Instagram" arrow>
                      <span>
                        <AiOutlineInstagram />
                      </span>
                    </Tooltip>
                  </div>
                  <h1 className="mt-5 text-2xl font-semibold">Personal Info</h1>
                  <div className="">
                    <label className="font-semibold">Known For</label>
                    <p>
                      {personsArray.known_for_department
                        ? personsArray.known_for_department
                        : "NA"}
                    </p>
                  </div>
                  <div>
                    <label className="font-semibold">Known Credits</label>
                    <p>
                      {personsArray.credits?.cast?.length
                        ? personsArray.credits?.cast?.length
                        : "NA"}
                    </p>
                  </div>
                  <div>
                    <label className="font-semibold">Gender</label>
                    <p>{personsArray.gender === 1 ? "Female" : "Male"}</p>
                  </div>
                  <div>
                    <label className="font-semibold">Birthday</label>
                    <p>
                      {personsArray.birthday ? personsArray.birthday : "NA"}
                    </p>
                  </div>
                  {personsArray.deathday && (
                    <div>
                      <label className="font-semibold">Deathday</label>
                      <p>{personsArray.deathday}</p>
                    </div>
                  )}
                  <div>
                    <label className="font-semibold">Place of Birth</label>
                    <p>
                      {personsArray.place_of_birth
                        ? personsArray.place_of_birth
                        : "NA"}
                    </p>
                  </div>
                  <div>
                    {personsArray?.also_known_as?.length > 0 && (
                      <label className="font-semibold">Also Known As</label>
                    )}{" "}
                    <p className="flex flex-col gap-">
                      {personsArray?.also_known_as?.map((knownAs, index) => (
                        <span key={index} className="border-b pt-2">
                          {knownAs}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              <aside className="w-3/4 h-auto overflow-hidden">
                <a href={personsArray.homepage} target="_blank">
                  <h1 className="text-3xl font-bold">{personsArray.name}</h1>
                </a>
                <h2 className="mt-8 mb-4 text-xl font-semibold">Biography</h2>
                <p className="mb-5">{`${
                  personsArray.biography
                    ? seeMore
                      ? personsArray.biography
                      : personsArray.biography.slice(0, 500) + " ..."
                    : `We do not have a biography for ${personsArray.name}`
                }`}</p>
                {personsArray?.biography?.length > 500 && (
                  <button
                    className="border text-sm px-1 rounded bg-gray-700 text-gray-200 hover:bg-gray-500"
                    onClick={toggleSeeMore}
                  >
                    {seeMore ? "See Less" : "See More"}
                  </button>
                )}
                {personsArray?.credits?.cast && (
                  <h2 className="mt-10 text-xl font-semibold">Known For</h2>
                )}
                <div className="flex gap-4 overflow-x-scroll pb-10 pr-10 h-72">
                  {personsArray?.credits?.cast
                    ?.filter(
                      (casts) => casts.popularity > 30 && casts.poster_path
                    )
                    .map((casts) => {
                      return (
                        <div
                          key={casts.id}
                          className="w-[150px] h-[200px] shrink-0"
                        >
                          <Link to={`/${casts.id}`}>
                          <img
                            src={`http://image.tmdb.org/t/p/w500${casts.poster_path}`}
                            alt={casts.title}
                            className="w-full h-full rounded-md"
                          />
                            <p className="ml-2 text-sm">{casts.title}</p>
                            </Link>
                        </div>
                      );
                    })}
                </div>
                <div className="">
                  <h2 className="text-lg font-semibold">Acting</h2>
                  <div className="shadow-lg p-5 border-2">
                    {personsArray?.credits?.cast?.map((casts) => {
                      return (
                        <div
                          className="border-b flex items-center py-4 gap-4 shrink-0 overflow-x-scroll"
                          key={casts.id}
                        >
                          <p>
                            {casts.release_date
                              ? casts?.release_date?.substring(0, 4)
                              : "Null"}
                          </p>
                          <FaCircleNotch className="text-sm" />
                          <p className="font-semibold shrink-0">
                            {casts.title}
                          </p>{" "}
                          as <p className="shrink-0">{casts.character}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        )}
      </div>

      {!personsArray.gender && !personsArray.profile_path && (
        <section className="flex gap-4 mt-10 pl-10 mb-10">
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
                        <Link to={`/${cast.id}`}>
                          <img
                            src={`http://image.tmdb.org/t/p/w500${cast.profile_path}`}
                            alt={cast.name}
                            className="w-full h-full rounded-t"
                          />
                        </Link>
                      </figure>
                      <h3 className="font-bold text-center">
                        {cast.character}
                      </h3>
                      <h5>{cast.original_name}</h5>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="flex flex-col border w-full px-2 justify-around">
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
                {itemDetails.budget
                  ? `$${new Intl.NumberFormat().format(itemDetails.budget)}`
                  : "NA"}
              </span>
            </div>
            <div>
              <p>Revenue: </p>
              <span className="font-bold">
                {itemDetails.revenue
                  ? `$${new Intl.NumberFormat().format(itemDetails.revenue)}`
                  : "NA"}
              </span>
            </div>
          </div>
        </section>
      )}

      {!personsArray.gender && (
        <section className="mx-10 mb-10">
          {!personsArray.gender && (
            <h1 className="text-2xl font-bold ">Media</h1>
          )}
          <div className="flex gap-5 my-4 overflow-x-scroll h-auto py-3">
            {movieOrTvVideos?.map((movies) => {
              return (
                <div key={movies.key} className=" flex flex-col w-1/3">
                  <iframe
                    width="full"
                    height="190"
                    src={`https://www.youtube.com/embed/${movies?.key}`}
                    title={`${movies.name} video clips`}
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
        </section>
      )}
      {!personsArray.gender && !personsArray.profile_path && (
        <section className="mx-10 mb-20 h-auto">
          <h1 className="text-2xl font-bold">Recommendations</h1>
          <div className="flex gap-5 my-4 pb-24 overflow-x-scroll ">
            {similarItems?.map((items) => {
              return (
                <div className="shadow-lg">
                  <figure className="w-[200px] h-[150px]">
                    <Link to={`/${items.id}`}>
                      <img
                        src={`http://image.tmdb.org/t/p/w500${items.poster_path}`}
                        alt={`${items.title || items.name} poster`}
                        className="w-full h-full rounded-md"
                      />
                    </Link>
                    <figcaption className="text-lg ml-3">
                      {items.title || items.name}
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

//

export default SearchDetails;
