import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import GeneralSearchResults from "./Pages/GeneralSearchResults";
import AiringToday from "./Pages/AiringToday";
import Popular from "./Pages/Popular";
import PopularPeople from "./Pages/PopularPeople";
import TopRated from "./Pages/TopRated";
import Upcoming from "./Pages/Upcoming";
import Header from "./Header";
import Footer from "./Footer";
import ErrorPage from "./Pages/ErrorPage";
import SearchDetails from "./Pages/SearchDetails";

const App = () => {
  return (
    <div className="flex flex-col min-h-[100vh] relative bg-gray-100">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:searchDetails" element={<SearchDetails />} />

        <Route path="searchResults" element={<GeneralSearchResults />} />
        <Route path="Airing-Today" element={<AiringToday />} />
        <Route path="Popular" element={<Popular />} />
        <Route path="Popular-People" element={<PopularPeople />} />
        <Route path="Top-Rated" element={<TopRated />} />
        <Route path="Upcoming" element={<Upcoming />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

// API KEY: 711b673e8a9d9a73798bfbd7f7e018b7
// Request Sample: https://api.themoviedb.org/3/movie/550?api_key=711b673e8a9d9a73798bfbd7f7e018b7
