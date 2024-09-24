import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_URL } from "../utils/constants";
import {  addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies)

   useEffect(()=>{
    !topRatedMovies && getTopRatedMovies();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);

    const getTopRatedMovies = async ()=>{
      try{
        const data = await  fetch(TOP_RATED_URL,API_OPTIONS);
        const json = await data.json();
       
        dispatch(addTopRatedMovies(json.results))
      }
      catch(e){
        console.log(e+" failed fetch");
        
      }
     
     
    }
}
export default useTopRatedMovies;