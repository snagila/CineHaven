import React, { useEffect, useState } from "react";
import ScrollTable from "../../components/scrollableTable/ScrollableTable";

const SimilarMovies = ({ id }) => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [similar, setSimilar] = useState([]);
  const similarContentUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`;
  const fetchSimilarMovie = async () => {
    const response = await fetch(similarContentUrl);
    const data = await response.json();
    setSimilar(data.results);
  };
  useEffect(() => {
    fetchSimilarMovie();
  }, [id]);
  return (
    <>
      {similar.length > 0 && (
        <ScrollTable title={"Similar Movies"} movieArray={similar} />
      )}
    </>
  );
};

export default SimilarMovies;
