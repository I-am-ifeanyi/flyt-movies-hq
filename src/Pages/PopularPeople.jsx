import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const PopularPeople = () => {
  const [popularPeoplePage, setPopularPeoplePage] = useState(1);
  const [popularPeopleArray, setPopularPeopleArray] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=711b673e8a9d9a73798bfbd7f7e018b7&language=en-US&page=${popularPeoplePage}`
    )
      .then((data) => data.json())
      .then((res) => setPopularPeopleArray(res.results));
  }, [popularPeoplePage]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [popularPeoplePage]);

  return (
    <div className="p-10">
      <h1 className="font-semibold text-2xl">Popular People</h1>
      <div className="mt-10 flex flex-wrap justify-between w-full">
        {popularPeopleArray &&
          popularPeopleArray
            .filter((result) => result.profile_path)
            .map((result) => {
              return (
                <div
                  className="w-1/5 border shadow-lg bg-white rounded-lg pb-3 mb-5 mr-2"
                  key={result.id}
                >
                   <Link to={`/${result.id}`}>
                  <figure className="w-full h-60">
                    <img
                      src={`http://image.tmdb.org/t/p/w500${result.profile_path}`}
                      alt={result.name}
                      className="w-full h-full rounded-t-lg"
                    />
                    </figure>
                     </Link>
                  <h1 className="pl-2">{result.name}</h1>
                  <div className="pl-2">
                    {result.known_for.map((result) => (
                      <p key={result.id} className="font-extralight text-sm">
                        {result.name}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
      </div>
      <div className="flex gap-5 mt-5">
        <button
          className="border px-5 py-1 bg-gray-800 text-gray-200 hover:bg-gray-600 rounded-md"
          onClick={() => {
            setPopularPeoplePage((prev) => prev + 1);
          }}
        >
          Next Page
        </button>
        {popularPeoplePage > 1 && (
          <button
            className="border px-5 py-1 bg-gray-800 text-gray-200 hover:bg-gray-600 rounded-md"
            onClick={() => {
              setPopularPeoplePage((prev) => prev - 1);
            }}
          >
            Previous Page
          </button>
        )}
      </div>
    </div>
  );
};

export default PopularPeople;
