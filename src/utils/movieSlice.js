import {createSlice} from "@reduxjs/toolkit"

const movieSlice = createSlice({
  name:"movies",
  initialState:{
     nowPlayingMovies:null,
     popularMovies:null,
     upComingMovies:null,
     topRatedMovies:null,
     mainTrailer:null
  },
  reducers:{
     addNowPlayingMovies :(state,action)=>{
        state.nowPlayingMovies=action.payload;
     },
     addPopularMovies :(state,action)=>{
       state.popularMovies=action.payload;
     },
     addTopRatedMovies :(state,action)=>{
      state.topRatedMovies=action.payload;
    },
    addUpcomingMovies :(state,action)=>{
      state.upComingMovies=action.payload;
    },
     addMainTrailer :(state,action)=>{
        state.mainTrailer=action.payload;
     }
  }
})

export const {addNowPlayingMovies,addMainTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;