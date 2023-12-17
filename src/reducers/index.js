// reducers/index.js
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    favourites: [],
    showFavourites: false,
  },
  reducers: {
    addMovies: (state, action) => {
      state.list = action.payload;
    },
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      const filteredArray = state.favourites.filter((movie) => movie.Title !== action.payload.Title);
      state.favourites = filteredArray;
    },
    setShowFavourite: (state, action) => {
      state.showFavourites = action.payload;
    },
  },
});

export const { addMovies, addFavourite, removeFromFavourites, setShowFavourite } = movieSlice.actions;
export default movieSlice.reducer;
