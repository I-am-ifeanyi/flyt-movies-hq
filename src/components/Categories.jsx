import React, { useState, useEffect } from "react";

const Categories = () => {
  const APIKEY = "711b673e8a9d9a73798bfbd7f7e018b7";
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [trendingID, setTrendingID] = useState([]);
  const [onTvID, setOnTvID] = useState([]);
  const [topRatedID, setTopRatedID] = useState([])
  
  const [errorMessage, setErrorMessage] = useState("");

  const airingTodayAPI = `https://api.themoviedb.org/3/tv/airing_today?api_key=${APIKEY}&language=en-US&page=1`;
  const onTheAirAPI = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIKEY}&language=en-US&page=1`;
  const topRatedAPI = `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKEY}&language=en-US&page=1`;
  const trendingAPI = `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`;
  const moviesAPI = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`;
  const TvAPI = `https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}&language=en-US&page=1`;

 console.log(trendingID)
  console.log(trending)


  useEffect(() => {
    fetch(airingTodayAPI)
      .then((response) => response.json())
      .then((res) => setAiringToday(res.results))
      .catch((err) => setErrorMessage(err));
  }, []);

  useEffect(() => {
    fetch(onTheAirAPI)
      .then((response) => response.json())
      .then((res) => {
        setOnTheAir(res.results);
        setOnTvID(res.results[0].id)
      })
      .catch((err) => setErrorMessage(err));
  }, []);

  useEffect(() => {
    fetch(topRatedAPI)
      .then((response) => response.json())
    .then((res) => {
      setTopRated(res.results)
      setTopRatedID(res.results[0].id)
    })
      .catch((err) => setErrorMessage(err));
  }, []);

  useEffect(() => {
    fetch(trendingAPI)
      .then((response) => response.json())
      .then((res) => {
        setTrending(res.results);
         res.results.map((result) => {
          setTrendingID(result);
        });
      })
      .catch((err) => setErrorMessage(err));
  }, []);

  useEffect(() => {
    fetch(moviesAPI)
      .then((response) => response.json())
      .then((res) => setMovies(res.results))
      .catch((err) => setErrorMessage(err));
  }, []);

  useEffect(() => {
    fetch(TvAPI)
      .then((response) => response.json())
      .then((res) => setTvShows(res.results))
      .catch((err) => setErrorMessage(err));
  }, []);

  // useEffect(() => {
  //   fetch(trendingTrailerAPI)
  //     .then((response) => response.json())
  //     .then((res) => setTrendingTrailers(res.results))
  //     .catch((err) => setErrorMessage(err));
  // }, []);

  // useEffect(() => {
  //   fetch(onTvVideosAPI)
  //     .then((response) => response.json())
  //     .then((res) => setOnTvTrailers(res.results))
  //     .catch((err) => setErrorMessage(err));
  // }, []);

  
  // useEffect(() => {
  //   fetch(topRatedVideosAPI)
  //     .then((response) => response.json())
  //     .then((res) => setTopRatedTrailers(res.results))
  //     .catch((err) => setErrorMessage(err));
  // }, []);
  

  return [
    airingToday,
    onTheAir,
    topRated,
    errorMessage,
    trending,
    movies,
    tvShows,
    trendingID,
    onTvID, 
    topRatedID
  ];
};

export default Categories;
