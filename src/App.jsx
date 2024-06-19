import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./Reusuable-components/header/header.css";
import HomePage from "./pages/homePage/HomePage";
import SearchResultPage from "./pages/searchResult/SearchResultPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchResult/:id" element={<SearchResultPage />} />
      </Routes>
    </>
  );
}

export default App;
