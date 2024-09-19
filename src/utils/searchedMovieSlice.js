import { createSlice } from "@reduxjs/toolkit";

const searchedMovieSlice = createSlice({
    name:"SearchedMovies",
    initialState:{
        movies:null
    },
    reducers:{
        addMovies:(state,action)=>{
            state.movies=action.payload;
        }
    }
})

export const {addMovies} = searchedMovieSlice.actions;

export default searchedMovieSlice.reducer;