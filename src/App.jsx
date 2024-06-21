import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./Reusuable-components/header/header.css";
import HomePage from "./pages/homePage/HomePage";
import SearchResultPage from "./pages/searchResult/SearchResultPage";
import AllMovies from "./components/movieTable/AllMovies";
import ActionMovies from "./components/movieTable/ActionMovies";
import ComedyMovies from "./components/movieTable/ComedyMovie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchResult/:id" element={<SearchResultPage />} />
        <Route path="/allMovies" element={<AllMovies />} />
        <Route path="/actionMovies" element={<ActionMovies />} />
        <Route path="/comedyMovies" element={<ComedyMovies />} />
      </Routes>
    </>
  );
}

export default App;
