import { useEffect, useState } from "react";
import {
  getPopularMovies,
  getTrendingMovies,
  getTopRatedMovies,
} from "../Components/MovieAPI";
import MovieCard from "../components/MovieCard";

function Home() {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const popularData = await getPopularMovies();
      const trendingData = await getTrendingMovies();
      const topData = await getTopRatedMovies();

      setPopular(popularData);
      setTrending(trendingData);
      setTopRated(topData);
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>

      <h2>🔥 Popular</h2>

      <div>
        {popular?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h2>⭐ Top Rated</h2>

      {topRated?.map((movie) => (
           <MovieCard key={movie.id} movie={movie} />
      ))}

      <h2>🚀 Trending</h2>

      {trending?.map((movie) => (
         <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
