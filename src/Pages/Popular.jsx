import React, { useState, useEffect } from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const Popular = () => {
  const [popularPage, setPopularPage] = useState(1);
  const [popularArray, setPopularArray] = useState([]);
  const [sortingState, setSortingState] = useState({
    sort: false,
    filters: false,
    whereToWatch: false
  })
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=711b673e8a9d9a73798bfbd7f7e018b7&language=en-US&page=${popularPage}`
    )
      .then((res) => res.json())
      .then((data) => setPopularArray(data.results))
      .catch((error) => console.log(error));
  }, []);

  const toggleSortingState = () => {
    setSortingState({
      sort: sort => !sort
    })
  }


  return (
    <div className="px-10 ">
      <h1 className="text-2xl font-medium my-5">Popular Movies</h1>
      <div>
        <div className="w-1/4 rounded-lg border shadow-xl">
          <div className="w-full h-auto border ">
            <div className="font-semi-bold border-b-2 p-3 flex items-center justify-between" onClick={toggleSortingState}>
              <h1 className="">Sort</h1>
              {sortingState.sort ? (
                <MdKeyboardArrowDown className="font-extrabold text-xl" />
              ) : (
                <MdKeyboardArrowRight className="font-extrabold text-xl" />
              )}
            </div>
            {sortingState.sort && <div className="p-3">
              <h1 className="mb-2 font-extralight">Sort results by</h1>
              <select className="p-2 w-full rounded-lg pr-3 bg-gray-200 text-sm">
                <option value="Popularity Descending">
                  Popularity Descending
                </option>
                <option value="Popularity Ascending">
                  Popularity Ascending
                </option>
                <option value="Rating Ascending">Rating Ascending</option>
                <option value="Rating Descending">Rating Descending</option>
                <option value="Release Date Descending">
                  Release Date Descending
                </option>
                <option value="Release Date Ascending">
                  Release Date Ascending
                </option>
              </select>
            </div>}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Popular;
