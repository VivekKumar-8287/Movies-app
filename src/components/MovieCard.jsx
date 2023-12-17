// MovieCard.js (Functional Component)

// Step 1: Import necessary dependencies
import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavourite, removeFromFavourite } from '../actions';

// Step 2: Define the MovieCard component
function MovieCard(props) {
  // Step 3: Access the dispatch function from Redux
  const dispatch = useDispatch();

  // Step 4: Define functions to handle favourite and unfavourite actions
  const handleFavouriteClick = () => {
    const { movie, isFavourite } = props;

    // Toggle between addFavourite and removeFromFavourite based on isFavourite
    if (isFavourite) {
      dispatch(removeFromFavourite(movie));
    } else {
      dispatch(addFavourite(movie));
    }
  };

  const handleUnFavouriteClick = () => {
    // Step 5: Add logic for removing from favourites if needed
    const {movie} = props;
    dispatch(removeFromFavourite(movie));
  };

  // Step 6: Destructure props to get movie and isFavourite
  const { movie, isFavourite } = props;

  // Step 7: Render the MovieCard component
  return (
    <div className='movie-card'>
      <div className='left'>
        <img alt={movie.Title} src={movie.Images[0]} className='movie-poster' />
      </div>
      <div className='right'>
        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>
        <div className="footer">
          <span className="rating">Rating: {movie.imdbRating}</span>
          {isFavourite ? (
            <button className='favourite-btn' onClick={handleUnFavouriteClick}>
              UnFavourite
            </button>
          ) : (
            <button className='favourite-btn' onClick={handleFavouriteClick}>
              Favourite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Step 8: Export the MovieCard component
export default MovieCard;
