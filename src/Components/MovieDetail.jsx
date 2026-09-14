import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../Components/MovieAPI";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((item) => item.id === Number(id));
  });

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

  const handlrFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const newFavorite = favorites.filter((item) => item.id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(newFavorite));
      setIsFavorite(false);
      console.log(newFavorite);
    } else {
      const newFavorite = [...favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(newFavorite));

      setIsFavorite(true);
      console.log(newFavorite);
    }
  };
  console.log(isFavorite);
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
      <button className="" onClick={handlrFavorite}>
        {isFavorite ? "❤️favorite" : " 🤍favorite"}
      </button>
    </div>
  );
}

export default MovieDetail;
