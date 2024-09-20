import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=>store.movies.popularMovies);

   useEffect(()=>{
   !popularMovies && getPopularMoviesData();
   },[]);

    const getPopularMoviesData = async ()=>{
     const data = await  fetch(POPULAR_URL,API_OPTIONS);
     const json = await data.json();
    
     dispatch(addPopularMovies(json.results))
     
    }
}
export default usePopularMovies;