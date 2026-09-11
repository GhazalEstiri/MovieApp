import { useState, useEffect } from "react";
import {
  getPopularMovies,
  getTrendingMovies,
  getTopRatedMovies,
} from "../Components/MovieAPI";
import MovieCard from "./MovieCard";
import { useParams, Link } from "react-router-dom";
function Home() {
//   const { id } = useParams();
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topraited, setTopRaited] = useState([]);
  async function getApi() {
    const popularData = await getPopularMovies();
    const trendingData = await getTrendingMovies();
    const topRatedData = await getTopRatedMovies();
    setPopular(popularData);
    setTrending(trendingData);
    setTopRaited(topRatedData);
  }
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="grid grid-cols-5 w-full">
      <div>
        <h1>popular movie</h1>
        {popular.map((movie) => {
          return (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          );
        })}
      </div>

      <div>
        <h1>trending movie</h1>

        {trending.map((movie) => {
          return (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          );
        })}
      </div>
      <div>
        <h1>top raited movie</h1>
        {topraited.map((movie) => {
          return (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
