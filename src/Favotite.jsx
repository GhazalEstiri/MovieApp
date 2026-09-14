import { useState } from "react";
import MovieCard from "./Components/MovieCard";
import { Link } from "react-router-dom";
function Favorite() {
  const [favorites, setFavorites] = useState(() => {
   return JSON.parse(localStorage.getItem("favorites")) || [];
  });
  return (
    <div className=" text-white ">
      {favorites.length === 0 ? (
        <h1>no film</h1>
      ) : (
        <div className="grid grid-cols-5 gap-5 p-10"> 
          {favorites.map((movie) => {
            return (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
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
