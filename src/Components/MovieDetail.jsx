import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../Components/MovieAPI";
import { Heart, Star } from "lucide-react";
import BackButton from "./ButtonBack"
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
    <div className=" min-h-screen relative overflow-hidden text-white rounded-xl flex flex-col  gap-40 mx-auto">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="absolute inset-0  w-full h-full object-top"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <section className=" flex flex-row justify-center gap-30 items-center">
        <div className="relative z-10 min-h-screen flex  px-6 sm:px-10 lg:px-20 py-16 flex-col  w-1/2 -ml-30">
          <h1
            className="text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
           font-bold text-[60px] sm:text-[50px] mt-10 mb-10 flex flex-wrap w-140"
          >
            {movie.title}
          </h1>

          <div className="flex items-center gap-6 mb-6 text-sm sm:text-base">
            <p className="text-yellow-400 font-semibold flex flex-row gap-1">
              <Star color="#FDC704" size={23} /> {movie.vote_average.toFixed(1)}
            </p>
            <p className="text-gray-300"> {movie.release_date} </p>
          </div>

          <div className="flex flex-col  gap-3 mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
              genres
            </p>
            <div className="flex flex-wrap gap-3">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className=" px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm text-gray-200 hover:bg-red-600/80 hover:border-red-500 transition duration-300 "
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div className=" flex flex-col mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
              Summary
            </p>
            <p className="text-gray-200 leading-7 text-sm sm:text-base max-w-xl">
              {movie.overview}
            </p>
          </div>

          <button
            onClick={handlrFavorite}
            className="flex items-center w-fit p-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-red-600 hover:border-red-500 transition duration-300 font-medium "
          >
            {isFavorite ? <Heart color="#d60000" /> : <Heart color="#fff" />}
          </button>
        </div>

        <div className=" flex flex-col w-80 z-20 mb-10 gap-5 justify-center items-end" >
          <div className="w-25 h-5 p-5 mt-6 flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm text-gray-200 hover:bg-red-600/80 hover:border-red-500 transition duration-300 ">
            <BackButton />
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}

export default MovieDetail;
