import React, { useEffect, useState } from "react";
import "./playTrailer.css";
import { Spinner } from "react-bootstrap";

const PlayTrailer = ({ id, sound }) => {
  const [loading, setIsLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [video_key, setVideo_key] = useState("");
  const movieVideoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const fetchVideo = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(movieVideoUrl);
      const data = await response.json();

      if (response.status === 200) {
        if (data.results) {
          setVideo_key(
            data.results.filter((video) => video.type === "Trailer")[0].key
          );
          setIsLoading(false);
        } else {
          console.log("Video key not found in the API response");
          setIsLoading(false);
        }
      } else {
        console.log("Error fetching video data:", data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error fetching video:", error);
      setIsLoading(false);
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
            src={`https://www.youtube.com/embed/${video_key}?autoplay=1&mute=${sound}&loop=1&rel=0&controls=${
              sound ? 0 : 1
            }`}
            allowFullScreen
            allow="autoplay"
          ></iframe>
        </div>
      ) : (
        <h1 className="text-center error-message">
          {loading ? (
            <Spinner animation="border" role="status" />
          ) : (
            "Sorry this movie video is not available right now"
          )}
        </h1>
      )}
    </>
  );
};

export default PlayTrailer;
