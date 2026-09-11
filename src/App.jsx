import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import MovieCard from "./Components/MovieCard";
import MovieDetail from "./Components/MovieDetail";

function App() {
  return(
<BrowserRouter>
<Routes>

  <Route path="/" element={<Home/>}/>

    <Route path="/movie/:id" element={<MovieDetail/>}/>

</Routes>
  </BrowserRouter>
  ) ;
}

export default App;
