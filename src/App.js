import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import { useState } from "react";
import initialMovieCollection from "./Assets/InitialMovieCollection";
import AddMovie from "./Components/AddMovie/AddMovie";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Trending from "./Components/Trending";
import GetPro from "./Components/GetPro";

function App() {
  const [keyword, setKeyword] = useState("");
  const [FRating, setFRating] = useState(0.1);
  const [movies, setMovies] = useState(initialMovieCollection);
  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const search = (text) => {
    setKeyword(text);
  };
  const ratingFilter = (number) => {
    setFRating(number);
  };
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="App">
      <NavBar search={search} ratingFilter={ratingFilter} />
      <br />
      <Routes>
        <Route
          path="/add-movie"
          element={<AddMovie addNewMovie={addNewMovie} />}
        />
        <Route
          path="/"
          element={
            <MovieList
              movies={movies.filter((movie) => {
                return (
                  movie.title
                    .toLowerCase()
                    .includes(keyword.toLowerCase().trim()) &&
                  movie.rating >= FRating
                );
              })}
              deleteMovie={deleteMovie}
            />
          }
        />
        <Route path="/trending" element={<Trending />} />
        <Route path="/get-pro" element={<GetPro />} />
        <Route path="*" element={<h2>Not found! check your URL</h2>} />
      </Routes>
    </div>
  );
}

export default App;
