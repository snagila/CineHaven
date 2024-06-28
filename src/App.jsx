import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/HomePage";
import AllMovies from "./components/movieTable/AllMovies";
import ActionMovies from "./components/movieTable/ActionMovies";
import ComedyMovies from "./components/movieTable/ComedyMovie";

import MovieCard from "./Reusuable-components/movieCard/MovieCard.jsx";
import AllResults from "./pages/searchResult/AllResults.jsx";
import SearchResultPage from "./pages/searchResult/SearchResultPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movieresults/:id" element={<AllResults />} />
        <Route path="/searchedmovie/:id" element={<SearchResultPage />} />
        <Route path="/allMovies" element={<AllMovies />} />
        <Route path="/actionMovies" element={<ActionMovies />} />
        <Route path="/comedyMovies" element={<ComedyMovies />} />
      </Routes>
    </>
  );
}

export default App;
