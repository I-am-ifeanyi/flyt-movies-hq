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
          className="w-[60%] p-2 px-10 ml-20 rounded-xl outline-0 text-sm"
          ref={focusPoint}
          onClick={focusOnSearch}
        />
        <button
          className="ml-auto h-full px-8 py-2 bg-[#1f2c3a] text-white rounded-xl"
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
