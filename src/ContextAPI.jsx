import React, { useState, useRef } from "react";


const newContextAPI = React.createContext();

const ContextAPI = ({ children }) => {
  const [movieSearch, setMovieSearch] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchNotFound, setIsFetchNotFound] = useState("")
  const [showNavLinks, setShowNavLinks] = useState(false)
  const focusPoint = useRef();

  const searchSubmit = (e) => {
    e.preventDefault();
    const movieTvApi = `https://api.themoviedb.org/3/search/multi?api_key=711b673e8a9d9a73798bfbd7f7e018b7&language=en-US&page=1&include_adult=false&query=${query}`;
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch(movieTvApi);
        if (!response.ok) {
          throw Error(response.status);
        }

        const movieData = await response.json();
        if(movieData.results < 1) {
          setIsFetchNotFound("Sorry, your search could not be found, check spelling and try again...")
          
        } 
        setMovieSearch(movieData.results);
        setIsLoading(false)
       
      } catch (Error) {
        setIsFetchNotFound(Error.message);
      }
      
    
    }
    fetchData();
  };

  const focusOnSearch = () => {
    focusPoint.current.style.border = "2px dotted gray";
    focusPoint.current.focus();
    toggleNavLinks;

  };

  const searchQuery = (e) => {
    setQuery(e.target.value);
  };

  const toggleDisplaySearch = () => {
    setDisplaySearch((prev) => !prev);
    setIsFetchNotFound('')
  };
  const switchOffDisplay = () => {
    setDisplaySearch(false);
  };

  const toggleNavLinks = () => {
    setShowNavLinks(prev => !prev)
  }
  return (
    <newContextAPI.Provider
      value={{
        displaySearch,
        toggleDisplaySearch,
        switchOffDisplay,
        movieSearch,
        query,
        searchQuery,
        searchSubmit,
        focusPoint,
        focusOnSearch,
        isLoading,
        isFetchNotFound,
        showNavLinks,
        toggleNavLinks,
      }}
    >
      {children}
    </newContextAPI.Provider>
  );
};

export { ContextAPI, newContextAPI };
