import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../Services/TMDB";
import genreOrCategoryReducer from "../Features/currentGenreOrCategory";
export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
