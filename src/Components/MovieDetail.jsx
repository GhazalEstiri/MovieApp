import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../Components/MovieAPI";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovieDetails(id);
      setMovie(data);
    }

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <h1>{movie.title}</h1>

      <p>{movie.overview}</p>

      <p>⭐ {movie.vote_average}</p>

      <p>Release: {movie.release_date}</p>

      <div>
        {movie.genres.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </div>
    </div>
  );
}

export default MovieDetail;
