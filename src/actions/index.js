import { createAction } from '@reduxjs/toolkit';

export const addMovies = createAction('movies/addMovies');
export const addFavourite = createAction('movies/addFavourite');
export const removeFromFavourite = createAction('movies/removeFromFavourite');
export const setShowFavourite = createAction('movies/setShowFavourite');


