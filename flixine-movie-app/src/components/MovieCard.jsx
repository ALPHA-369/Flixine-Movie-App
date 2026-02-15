import React from "react";

const MovieCard = ({
  movie: {
    title,
    name,
    vote_average,
    poster_path,
    original_language,
    release_date,
  },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "./no-movie-poster.png"
        }
        alt={`poster for ${name || title}`}
      />
      <p className="text-white">{!name ? title : name}</p>
    </div>
  );
};

export default MovieCard;
