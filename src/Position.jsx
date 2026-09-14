import { useState, useEffect } from "react";
import {
  getPopularMovies,
  getTrendingMovies,
  getTopRatedMovies,
} from "./Components/MovieAPI";
import { useParams, Link } from "react-router-dom";
import MovieCard from "./Components/MovieCard";
function Position() {
  const { position } = useParams();
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topraited, setTopRaited] = useState([]);

  async function getApi() {
    if (position === "popular") {
      const popularData = await getPopularMovies();
      setPopular(popularData);
    } else if (position === "trending") {
      const trendingData = await getTrendingMovies();
      setTrending(trendingData);
    } else if (position === "top-rated") {
      const topRatedData = await getTopRatedMovies();
      setTopRaited(topRatedData);
    }
  }
  useEffect(() => {
    getApi();
  }, [position]);

  return (
    <div className="grid grid-cols-5 gap-5 text-white p-10">
      {position === "popular" &&
        popular.map((movie) => {
          return (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          );
        })}
         {position === "trending" &&
        trending.map((movie) => {
          return (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          );
        })}
         {position === "top-rated" &&
        topraited.map((movie) => {
          return (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          );
        })}
    </div>
  );
}
export default Position;
