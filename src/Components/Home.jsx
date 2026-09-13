//-------------------second chance-----------------

// import { useState, useEffect } from "react";
// import {
//   getPopularMovies,
//   getTrendingMovies,
//   getTopRatedMovies,
// } from "../Components/MovieAPI";
// import MovieCard from "./MovieCard";
// import { useParams, Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel } from "swiper/modules";
// import "swiper/css";
// import { Clapperboard } from "lucide-react";
// function Home() {
//   //   const { id } = useParams();
//   const [popular, setPopular] = useState([]);
//   const [trending, setTrending] = useState([]);
//   const [topraited, setTopRaited] = useState([]);


//   async function getApi() {
//     const popularData = await getPopularMovies();
//     const trendingData = await getTrendingMovies();
//     const topRatedData = await getTopRatedMovies();
//     setPopular(popularData);
//     setTrending(trendingData);
//     setTopRaited(topRatedData);
//   }
//   useEffect(() => {
//     getApi();
//   }, []);


//   const MovieSlider = ({ title, movies }) => {
//     return (
//       <section>
//         <h1 className="text-2xl mb-4">{title}</h1>
//         <Swiper
//           loop={true}
//           spaceBetween={20}
//           slidesPerView={5}
//           grabCursor={true}
//           mousewheel={{
//             forceToAxis: true,
//           }}
//           modules={[Mousewheel]}
//         >
//           {movies.map((movie) => (
//             <SwiperSlide key={movie.id}>
//               <Link to={`/movie/${movie.id}`}>
//                 <MovieCard movie={movie} />
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     );
//   };

//   return (
//     <section>
//       <header className="flex gap-5 p-5 text-white flex-row justify-around items-center">
//         <h1 className="flex flex-row font-bold">
//           <Clapperboard className="text-red-700" />
//           Movie Site
//         </h1>
//         <div className="flex gap-5 p-5">
//           <Link to="/movie/Home" className="text-red-700">
//             Home
//           </Link>

//           <Link to="/movie/popular">Popular</Link>

//           <Link to="/movie/trending">Trending</Link>

//           <Link to="/movie/top-rated">Top Rated</Link>
//         </div>
//         <div>
          
//           <Link to="/search" >Search</Link>
//         </div>
//       </header>

//       <div className="text-white p-10 space-y-10">
//         <MovieSlider title="Popular Movies" movies={popular} />

//         <MovieSlider title="Trending Movies" movies={trending} />

//         <MovieSlider title="Top Rated Movies" movies={topraited} />
//       </div>
//     </section>
//   );
// }
// export default Home;

import { useState, useEffect } from "react";
import {
  getPopularMovies,
  getTrendingMovies,
  getTopRatedMovies,
  searchmovie,
} from "../Components/MovieAPI";
import MovieCard from "./MovieCard";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { Clapperboard } from "lucide-react";
function Home() {
  //   const { id } = useParams();
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topraited, setTopRaited] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");

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

  async function handleSearch() {
    if (!query.trim()) {
      setSearch([]);
      return;
    }
    const result = await searchmovie(query);
    setSearch(result);
    console.log(result);
    console.log(search)
  }


  const MovieSlider = ({ title, movies }) => {
    return (
      <section>
        <h1 className="text-2xl mb-4">{title}</h1>
        <Swiper
          loop={true}
          spaceBetween={20}
          slidesPerView={5}
          grabCursor={true}
          mousewheel={{
            forceToAxis: true,
          }}
          modules={[Mousewheel]}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };

  return (
    <section>
      <header className="flex gap-5 p-5 text-white flex-row justify-around items-center">
        <h1 className="flex flex-row font-bold">
          <Clapperboard className="text-red-700" />
          Movie Site
        </h1>
        <div className="flex gap-5 p-5">
          <Link to="/movie/Home" className="text-red-700">
            Home
          </Link>

          <Link to="/movie/popular">Popular</Link>

          <Link to="/movie/trending">Trending</Link>

          <Link to="/movie/top-rated">Top Rated</Link>
        </div>
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="text-white placeholder:text-white"
          />
        </div>
      </header>

      {search.length > 0 ? (
        <div className="grid grid-cols-5 gap-5 p-10 text-white">
          {search.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-white p-10 space-y-10">
          <MovieSlider title="Popular Movies" movies={popular} />

          <MovieSlider title="Trending Movies" movies={trending} />

          <MovieSlider title="Top Rated Movies" movies={topraited} />
        </div>
      )}
    </section>
  );
}
export default Home;
