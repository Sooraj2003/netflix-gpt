import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptSearchPageReducer from "./gptSearchSlice"
import languageReducer from "./languageSlice"
import searchedMoviesReducer from "./searchedMovieSlice"

const appStore = configureStore({
    reducer : {
       user:userReducer,
       movies:movieReducer,
       gptSearchPage:gptSearchPageReducer,
       language:languageReducer,
       searchedMovies:searchedMoviesReducer
    }
})

export default appStore;