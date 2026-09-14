import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MovieCard from "./Components/MovieCard";
import MovieDetail from "./Components/MovieDetail";
// import Search from "./Components/Search"
import Category from "./Components/Category";
import Position from "./Position";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/position/:position" element={<Position/>}/>
        <Route path="/category/:CategoryId" element={<Category/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
