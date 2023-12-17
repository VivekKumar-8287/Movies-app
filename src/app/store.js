import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../reducers/index.js';

// const store = configureStore({
//   reducer: {
//     movies: moviesReducer,
//   },
// });

// export default store;


export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
