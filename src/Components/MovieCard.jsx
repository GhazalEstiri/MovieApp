import { useState } from "react";
function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  
  return (
    <div>
      <img src={imageUrl} alt={movie.title} />

      <h3>{movie.title}</h3>

      <p>⭐ {movie.vote_average}</p>

     
    </div>
  );
}
export default MovieCard;
