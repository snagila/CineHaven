import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import AllMovies from "./components/movieTable/AllMovies";
import AllResults from "./pages/searchResult/AllResults.jsx";
import SearchResultPage from "./pages/searchResult/SearchResultPage.jsx";
import WatchedMovies from "./components/movieTable/WatchedMovie.jsx";
import MovieToWatch from "./components/movieTable/MovieToWatch.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movieresults/:id" element={<AllResults />} />
        <Route path="/searchedmovie/:id" element={<SearchResultPage />} />
        <Route path="/allMovies" element={<AllMovies />} />
        {/* <Route path="/actionMovies" element={<ActionMovies />} /> */}
        {/* <Route path="/comedyMovies" element={<ComedyMovies />} /> */}
        <Route path="/watchedMovies" element={<WatchedMovies />} />
        <Route path="/movies-to-watch" element={<MovieToWatch />} />
      </Routes>
    </>
  );
}

export default App;
