import React from "react";
import "./homepage.css";
import Header from "../../Reusuable-components/header/Header";
import SearchForm from "./SearchForm";

const HomePage = () => {
  return (
    <>
      <Header />
      <div id="homepage">
        <SearchForm />
      </div>
    </>
  );
};

export default HomePage;
