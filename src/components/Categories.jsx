import React, { useState, useEffect } from "react";

const Categories = () => {
  const APIKEY = "711b673e8a9d9a73798bfbd7f7e018b7";
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [count, setCount] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const airingTodayAPI = `https://api.themoviedb.org/3/tv/airing_today?api_key=${APIKEY}&language=en-US&page=${count}`;
  const onTheAirAPI = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIKEY}&language=en-US&page=${count}`;
  const topRatedAPI = `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKEY}&language=en-US&page=${count}`;
  const trendingAPI = `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`

  const goToNextPage = () => {
    setCount(prevCount => prevCount + 1)
    
  }


  useEffect(() => {
    fetch(airingTodayAPI)
      .then((response) => response.json())
      .then((res) => setAiringToday(res.results))
      .catch((err) => setErrorMessage(err));
  }, [count]);

  useEffect(() => {
    fetch(onTheAirAPI)
      .then((response) => response.json())
      .then((res) => setOnTheAir(res.results))
      .catch((err) => setErrorMessage(err));
  }, []);

  useEffect(() => {
    fetch(topRatedAPI)
      .then((response) => response.json())
      .then((res) => setTopRated(res.results))
      .catch((err) => setErrorMessage(err));
  }, []);


  useEffect(() => {
    fetch(trendingAPI)
      .then((response) => response.json())
      .then((res) => setTrending(res.results))
      .catch((err) => setErrorMessage(err));
  }, [count]);

  return [airingToday, onTheAir, topRated, errorMessage, trending, count, goToNextPage];
};

export default Categories;
