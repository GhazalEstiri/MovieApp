import { useState } from "react";
import MovieCard from "./Components/MovieCard";
import { Link } from "react-router-dom";
import BackButton from "./Components/ButtonBack";

function Favorite() {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });
  return (
    <div className=" text-white p-10">
      <div className="flex flex-row justify-between items-center">
        <h1
          className="text-white
           font-bold text-[60px] sm:text-[50px] mt-10 mb-10 uppercase"
        >
          Favorite
        </h1>
        <div className=" h-5 p-5 flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm text-gray-200 hover:bg-red-600/80 hover:border-red-500 transition duration-300 ">
          <BackButton />
        </div>
      </div>
      {favorites.length === 0 ? (
        <h1>no film</h1>
      ) : (
        <div className="grid grid-cols-5 gap-5">
          {favorites.map((movie) => {
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
      )}
    </div>
  );
}
export default Favorite;
