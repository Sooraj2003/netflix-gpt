import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_URL } from "../utils/constants";
import {  addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

   useEffect(()=>{
    getTopRatedMovies();
   },[]);

    const getTopRatedMovies = async ()=>{
     const data = await  fetch(TOP_RATED_URL,API_OPTIONS);
     const json = await data.json();
    
     dispatch(addTopRatedMovies(json.results))
     
    }
}
export default useTopRatedMovies;