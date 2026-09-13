import { useEffect } from "react";

// function Search() {
//   const [search, setSearch] = useState([]);
//   const [query, setQuery] = useState("");
//   async function searchmovie(title) {
//     const response = await fetch(
//       `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${title}`,
//     );
//     const data = await response.json();
//     return data.results;
//   }


//   async function handleSearch() {
//     if (!query.trim()) {
//       setSearch([]);
//       return;
//     }
//     const result = await searchmovie(query);
//     setSearch(result);
//     console.log(result);
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         className="text-white placeholder:text-white bg-white"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             handleSearch();
//           }
//         }}
//       />
//       {search.length > 0 && (
//         <div className="grid grid-cols-5 gap-5 p-10 text-white">
//           {search.map((movie) => (
//             <Link key={movie.id} to={`/movie/${movie.id}`}>
//               <MovieCard movie={movie} />
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// export default Search;
