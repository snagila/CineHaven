import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./Reusuable-components/header/header.css";
import HomePage from "./pages/homePage/HomePage";
import SearchResultPage from "./pages/searchResult/SearchResultPage";
import MovieTable from "./Reusuable-components/movieTable/MovieTable";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/searchResult/:id" element={<SearchResultPage />} />
          <Route path="/allMovies" element={<MovieTable />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
