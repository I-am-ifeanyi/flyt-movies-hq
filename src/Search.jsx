import React, { useContext } from "react";
import { newContextAPI } from "./ContextAPI";

import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ toggleDisplaySearch }) => {
  const { query, searchSubmit, searchQuery, focusPoint, focusOnSearch} = useContext(newContextAPI);

 

  return (
    <div>
      <form
        className="flex items-center p-1 shadow-lg px-8"
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
          className="ml-auto h-full px-2 py-1 bg-slate-900 text-white rounded text-sm"
          onClick={toggleDisplaySearch} value="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
