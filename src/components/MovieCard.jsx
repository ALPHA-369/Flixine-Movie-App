import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

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
      <div className="mt-4">
        <h3>{!name ? title : name}</h3>

        <div className="content">
          <div className="rating">
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
            <FontAwesomeIcon icon="fa-solid fa-star" className="rating-star" />
          </div>
          <span>|</span>
          <p className="lang">
            {original_language ? original_language : "N/A"}
          </p>
          <span>|</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
