import React, { useContext, useEffect } from "react";
import { newContextAPI } from "./ContextAPI";
import { useNavigate } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ toggleDisplaySearch }) => {
  const { query, searchSubmit, searchQuery, focusPoint, focusOnSearch } =
    useContext(newContextAPI);
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/searchResults");
  };

  return (
    <div>
      <form
        className="flex items-center p-1 shadow-lg pl-8"
        onSubmit={searchSubmit}
      >
        <label htmlFor="search"></label>
        <AiOutlineSearch className="font-bold ml-2 mr-[-108px] relative z-30" />
        <input
          type="text"
          name="search"
          onChange={searchQuery}
          value={query}
          placeholder="Search for a movie, tv show, a person ..."
          className="md:w-[60%] p-2 px-10 py-3 ml-20 rounded-xl outline-0 md:text-sm text-xs"
          ref={focusPoint}
          onClick={focusOnSearch}
        />
        <button
          className="ml-auto mr-5 h-full text-sm md:text px-3 md:px-8 py-3 md:py-3 bg-[#1f2c3a] text-white rounded-xl"
          onClick={() => {
            toggleDisplaySearch, redirect();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
