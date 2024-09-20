import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useGetNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);
    //memoization calling the api only when the data is not present in the redux store ,improving the performance of application by reducing api calls
   useEffect(()=>{
   !nowPlayingMovies && getNowPlayingData();
   },[]);

    const getNowPlayingData = async ()=>{
     const data = await  fetch(NOW_PLAYING_URL,API_OPTIONS);
     const json = await data.json();
    
     dispatch(addNowPlayingMovies(json.results))
     
    }
}
export default useGetNowPlayingMovies;