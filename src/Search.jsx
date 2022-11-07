import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div>
      <form className="flex items-center border p-1 shadow-lg px-8">
        <label htmlFor="search"></label>
        <AiOutlineSearch className="font-bold mr-3" />
        <input
          type="text"
          name="search"
          placeholder="Search for a movie, tv show, a person ..."
          value=""
          className="w-[50%] p-2 rounded-xl outline-0 text-sm"
        />
        <button className="ml-auto h-full px-2 py-1 bg-slate-900 text-white rounded text-sm">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
