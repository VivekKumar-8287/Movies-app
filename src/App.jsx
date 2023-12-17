// App.js (Functional Component)

// Step 1: Import necessary dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, setShowFavourite } from "./actions";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { data } from "../data";

// Step 2: Define the App component
function App() {
  // Step 3: Access the dispatch function and state from Redux
  const dispatch = useDispatch();
  const { list, favourites, ShowFavourites } = useSelector(
    (state) => state.movies
  );

  // Log the arrays to the console
  console.log('List:', list);
  console.log('Favourites:', favourites);
   
  const displayMovies = ShowFavourites ? favourites : list;

  const onChangeTab = (val) => {
    dispatch(setShowFavourite(val));
  };
  // Step 4: useEffect to dispatch addMovies action on component mount
  useEffect(() => {
    dispatch(addMovies(data));
  }, [dispatch]);

  // Step 5: Function to check if a movie is in favourites
  const isMovieFavourite = (movie) => {
    const index = favourites.findIndex((favMovie) => favMovie.id === movie.id);
    return index !== -1;
  };

  // Step 6: Render the App component
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${ShowFavourites ? "" : "active-tab"}`}
              onClick={() => onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${ShowFavourites ? "active-tab" : ""}`}
              onClick={() => onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                key={`movie-${index}`}
                movie={movie}
                dispatch={dispatch}
                isFavourite={isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Step 7: Export the App component
export default App;
