import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_URL } from "../utils/constants";
import {  addUpcomingMovies } from "../utils/movieSlice";


const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upComingMovies = useSelector((store)=>store.movies.upComingMovies)

   useEffect(()=>{
    !upComingMovies && getUpcomingMovies();
   },[]);

    const getUpcomingMovies = async ()=>{
     const data = await  fetch(UPCOMING_URL,API_OPTIONS);
     const json = await data.json();
    
     dispatch(addUpcomingMovies(json.results))
     
    }
}
export default useUpcomingMovies;