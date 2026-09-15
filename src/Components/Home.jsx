import { useState, useEffect } from "react";
import {
  getPopularMovies,
  getTrendingMovies,
  getTopRatedMovies,
  searchmovie,
  getCategory,
  getMoveOfCategory,
} from "../Components/MovieAPI";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { Clapperboard, Search } from "lucide-react";
import ShutterIdalnd from "../assets/shutteriland.jpg";

function Home() {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topraited, setTopRaited] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [movieCategory, setMovieCategory] = useState([]);
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
    console.log(search);
  }

  async function getCategories() {
    const categoryData = await getCategory();
    setCategory(categoryData);
  }
  useEffect(() => {
    getCategories();
  }, []);

  async function handleSelectbox(e) {
    const categoryId = e.target.value;
    if (categoryId === "default") {
      setMovieCategory([]);
      setSelectedCategory(categoryId);
      return;
    }
    const moviesCategory = await getMoveOfCategory(categoryId);
    setMovieCategory(moviesCategory);
    setSelectedCategory(categoryId);
  }

  const MovieSlider = ({ title, movies }) => {
    return (
      <section className="">
        <h1 className="text-2xl mb-6 font-bold">{title}</h1>
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
            <SwiperSlide key={movie.id} className="p-1 ">
              <Link
                to={`/movie/${movie.id}`}
                className="block mx-auto text-center hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300 p-2 rounded-2xl
                hover:-translate-y-2 hover:scale-105 transition-transform duration-400
                "
              >
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
      <header className="flex gap-5 p-5 text-white flex-row justify-around items-center text-lg w-[95%] mx-auto">
        <Link to="/">
          <h1 className="flex flex-row font-bold text-3xl items-center gap-2">
            <Clapperboard size={50} className="text-red-700" />
            Movie Site
          </h1>
        </Link>
        <div className="flex gap-5 p-5">
          <Link to="/" className="text-red-700">
            Home
          </Link>

          <Link to="/position/popular" className="hover:text-red-700">
            Popular
          </Link>
          <Link to="/position/trending" className="hover:text-red-700">
            Trending
          </Link>
          <Link to="/position/top-rated" className="hover:text-red-700">
            Top Rated
          </Link>
          <Link to="/favorite" className="hover:text-red-700">
            Favorite
          </Link>
        </div>
        <div>
          <div className="flex flex-row items-center gap-3 justify-center text-white bg-[#0D1825] border border-[#1E3042] p-2 placeholder:text-[#647181] rounded-xl focus:active:border-[#1E3042]">
            <p>
              <Search />
            </p>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="text-white bg-[#0D1825]  placeholder:text-[#647181] rounded-xl focus:active:border-[#1E3042] outline-none"
              placeholder="Search Movies ..."
            />
          </div>
        </div>
        <div>
          <select
            name="Categories"
            id="Categories"
            value={selectedCategory}
            onChange={handleSelectbox}
            className="bg-[#0D1825] border border-[#1E3042] text-[#F5F7FA] focus:active:border-[#1E3042] p-2 rounded-xl"
          >
            <option value="default">default</option>
            {category.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div>
        {movieCategory.length > 0 && (
          <div className="grid grid-cols-5 gap-5 p-10 text-white">
            {movieCategory.map((movie) => (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="block mx-auto text-center hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300 p-2 rounded-2xl
                hover:-translate-y-2 hover:scale-105 transition-transform duration-400
                "
              >
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
        )}

        {search.length > 0 && (
          <div className="grid grid-cols-5 gap-5 p-10 text-white">
            {search.map((movie) => (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="block mx-auto text-center hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300 p-2 rounded-2xl
                hover:-translate-y-2 hover:scale-105 transition-transform duration-400
                "
              >
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <section className="relative h-130 overflow-hidden rounded-xl w-[90%] flex mx-auto">
        <img
          src={ShutterIdalnd}
          alt=""
          className="absolute inset-0 w-full h-full object-top"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10  text-white flex justify-center items-center flex-col mx-auto top-50 right-100 gap-5 bg-[#4d515589] h-80 p-5 rounded-xl">
          <h1 className="font-bold text-5xl">Shutter Island</h1>
          <div className="flex flex-row gap-2">
            <p>⭐ 8.197</p>
            <p>Release: 2010-02-14</p>
            <p>Drama-Thriller-Mystery</p>
          </div>
          <p className="w-140 flex items-center text-center">
            World War II soldier-turned-U.S. Marshal Teddy Daniels investigates
            the disappearance of a patient from a hospital for the criminally
            insane, but his efforts are compromised by troubling visions and a
            mysterious doctor.
          </p>
          <div className="flex flex-row gap-3">
            <button className="bg-red-600 px-5 py-2 rounded-lg">
              Watch trailer
            </button>
            <button className="border border-white  px-5 py-2 rounded-lg">
              More Details
            </button>
          </div>
        </div>
      </section>

      <div className="text-white p-10 gap-10 w-[95%] flex mx-auto flex-col">
        <MovieSlider title="Popular Movies" movies={popular} />

        <MovieSlider title="Trending Movies" movies={trending} />

        <MovieSlider title="Top Rated Movies" movies={topraited} />
      </div>
    </section>
  );
}
export default Home;
