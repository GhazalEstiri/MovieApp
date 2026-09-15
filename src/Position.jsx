import { useState, useEffect } from "react";
import {
  getPopularMovies,
  getTrendingMovies,
  getTopRatedMovies,
} from "./Components/MovieAPI";
import { useParams, Link } from "react-router-dom";
import MovieCard from "./Components/MovieCard";
import BackButton from "./Components/ButtonBack";

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
    <section className="p-10">
      <div className="flex flex-row justify-between items-center">
        <h1
          className="text-white
           font-bold text-[60px] sm:text-[50px] mt-5 mb-10 uppercase"
        >
          {position}
        </h1>
        <div className=" h-5 p-5 flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm text-gray-200 hover:bg-red-600/80 hover:border-red-500 transition duration-300 ">
          <BackButton />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5 text-white ">
        {position === "popular" &&
          popular.map((movie) => {
            return (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="block mx-auto text-center hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300 p-2 rounded-2xl
                hover:-translate-y-2 hover:scale-105 transition-transform duration-400
                "
              >
                <MovieCard movie={movie} />
              </Link>
            );
          })}
        {position === "trending" &&
          trending.map((movie) => {
            return (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="block mx-auto text-center hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300 p-2 rounded-2xl
                hover:-translate-y-2 hover:scale-105 transition-transform duration-400
                "
              >
                <MovieCard movie={movie} />
              </Link>
            );
          })}
        {position === "top-rated" &&
          topraited.map((movie) => {
            return (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="block mx-auto text-center hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300 p-2 rounded-2xl
                hover:-translate-y-2 hover:scale-105 transition-transform duration-400
                "
              >
                <MovieCard movie={movie} />
              </Link>
            );
          })}
      </div>
    </section>
  );
}
export default Position;
