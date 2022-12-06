import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Categories from "../components/Categories";

const SearchDetails = () => {
  const [itemDetails, setItemDetails] = useState([]);
  const [category, setCategory] = useState("movie");
  const [trending] = Categories();
  const { searchDetails } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${category}/${searchDetails}?api_key=711b673e8a9d9a73798bfbd7f7e018b7&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          setCategory("tv");
        } else setItemDetails(data);
      });
  }, [searchDetails, category]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${category}/${searchDetails}/similar?api_key=711b673e8a9d9a73798bfbd7f7e018b7&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => {
        if(data.success === false) {
            setCategory('tv')
        } else console.log(data.results)
      });
  }, [searchDetails, category]);

  //   console.log(itemDetails)

  return (
    <>
      {/* <div className="bg-green-400 w-[100px]">{searchDetails}</div>
      <p>Check the IDs</p>
      <div className="flex gap-3 flex-wrap "> {detailedInformation}</div> */}
      <p>{itemDetails.overview}</p>

      <Link to="/">Go Home</Link>
    </>
  );
};

export default SearchDetails;
