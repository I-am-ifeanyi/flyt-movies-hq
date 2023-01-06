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
  const [topRatedID, setTopRatedID] = useState([])
  const [weeklyTrends, setWeeklyTrends] = useState([]);
  const [topRatedTrailers, setTopRatedTrailers] = useState([]);
  const [trendingTrailers, setTrendingTrailers] = useState([]);
  const [isTrendThisWeek, setIsTrendThisWeek] = useState(true);
  const [isTrendThisWeek1, setIsTrendThisWeek1] = useState(false);
  const [isTrendThisWeek2, setIsTrendThisWeek2] = useState(false);
  const [isClicked, setIsClicked] = useState(true);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [subActions, setSubActions] = useState(0);
  const [isClicked4, setIsClicked4] = useState(true);
  const [isClicked5, setIsClicked5] = useState(false);
  




  let weekTrendingCategory;

  if (isTrendThisWeek) {
    weekTrendingCategory = "movie";
  } else if (isTrendThisWeek1) {
    weekTrendingCategory = "tv";
  } else if (isTrendThisWeek2) {
    weekTrendingCategory = "person";
  } else return weekTrendingCategory;
  
  const [errorMessage, setErrorMessage] = useState("");

  const airingTodayAPI = `https://api.themoviedb.org/3/tv/airing_today?api_key=${APIKEY}&language=en-US&page=1`;
  const onTheAirAPI = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIKEY}&language=en-US&page=1`;
  const topRatedAPI = `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKEY}&language=en-US&page=1`;
  const trendingAPI = `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`;
  const moviesAPI = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`;
  const TvAPI = `https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}&language=en-US&page=1`;
  
  const trendingTrailerAPI = `https://api.themoviedb.org/3/movie/${trendingID}/videos?api_key=${APIKEY}&language=en-US`;

  const topRatedVideosAPI = `https://api.themoviedb.org/3/tv/${topRatedID}/videos?api_key=${APIKEY}&language=en-US`;
  const trendingWeekAPI = `https://api.themoviedb.org/3/trending/${weekTrendingCategory}/week?api_key=${APIKEY}`;
 


 


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
          setTrendingID(res.results[0].id);
        
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


  useEffect(() => {
    fetch(trendingTrailerAPI)
      .then((res) => res.json())
      .then((res) => setTrendingTrailers(res.results));
  }, [trending]);

  useEffect(() => {
    fetch(topRatedVideosAPI)
      .then((res) => res.json())
      .then((res) => setTopRatedTrailers(res.results));
  }, [topRated]);

  useEffect(() => {
    fetch(trendingWeekAPI)
      .then((res) => res.json())
      .then((data) => setWeeklyTrends(data?.results));
  }, [weekTrendingCategory]);

  const backdrop = trending[5]?.backdrop_path;

  const style = {
    backgroundImage: `url('http://image.tmdb.org/t/p/w500${backdrop}')`,
    height: "400px",
    backgroundSize: "cover",
    marginBottom: "100px",
  };

  const style2 = {
    backgroundImage: `url('https://bookmap.com/wp-content/uploads/2022/05/Random-walk-1024x513.png')`,
    height: "auto",
    width: "100%",
    backgroundSize: "cover",
    marginBottom: "100px",
  };

  
  const toggleTrendWeek = () => {
    setIsTrendThisWeek(true);
    setIsTrendThisWeek1(false);
    setIsTrendThisWeek2(false);
  };

  const toggleTrendWeek1 = () => {
    setIsTrendThisWeek(false);
    setIsTrendThisWeek1(true);
    setIsTrendThisWeek2(false);
  };

  const toggleTrendWeek2 = () => {
    setIsTrendThisWeek(false);
    setIsTrendThisWeek1(false);
    setIsTrendThisWeek2(true);
  };

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

  const selectItem = (num) => {
    if (subActions < 1) {
      setSubActions(num);
    } else setSubActions(0);
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
  ("");

  var selectedMovieCategory;
  if (isClicked4) {
    selectedMovieCategory = movies;
  } else if (isClicked5) {
    selectedMovieCategory = tvShows;
  } else return selectedMovieCategory;



  

  return [
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
    APIKEY,
  ];
};

export default Categories;
