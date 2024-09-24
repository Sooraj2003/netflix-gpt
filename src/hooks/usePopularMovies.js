import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=>store.movies.popularMovies);

   useEffect(()=>{
   !popularMovies && getPopularMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);
  
    const getPopularMoviesData = async ()=>{
        try{
            const data = await  fetch(POPULAR_URL,API_OPTIONS);
            const json = await data.json();
           
            dispatch(addPopularMovies(json.results))
        }
        catch(e){
            console.log(e+ "failed fetch");
            
        }
     
     
    }
}
export default usePopularMovies;