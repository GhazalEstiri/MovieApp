import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MovieCard from "./Components/MovieCard";
import MovieDetail from "./Components/MovieDetail";
// import Search from "./Components/Search"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        {/* <Route path="/search" element={<Search/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
