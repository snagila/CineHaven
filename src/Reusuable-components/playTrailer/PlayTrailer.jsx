import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API_KEY";
import "./playTrailer.css";
import { Container } from "react-bootstrap";

const PlayTrailer = ({ id }) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [video_key, setVideo_key] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchMovieurl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const movieVideoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const fetchVideo = async () => {
    try {
      const response = await fetch(movieVideoUrl);
      const data = await response.json();

      if (response.status === 200) {
        if (data.results) {
          setVideo_key(
            data.results.filter((video) => video.type === "Trailer")[0].key
          );
        } else {
          console.log("Video key not found in the API response");
        }
      } else {
        console.log("Error fetching video data:", data);
      }
    } catch (error) {
      console.log("Error fetching video:", error);
    }
  };
  useEffect(() => {
    fetchVideo();
  }, [id]);

  return (
    <>
      {video_key ? (
        <div
          className="iframe-container ratio ratio-16x9"
          style={{ height: "60vh" }}
        >
          <iframe
            width="100%"
            src={`https://www.youtube.com/embed/${video_key}?autoplay=1&mute=1&loop=1`}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        "hello"
      )}
    </>
  );
};

export default PlayTrailer;
