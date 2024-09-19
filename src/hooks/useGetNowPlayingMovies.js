import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useGetNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

   useEffect(()=>{
   getNowPlayingData();
   },[]);

    const getNowPlayingData = async ()=>{
     const data = await  fetch(NOW_PLAYING_URL,API_OPTIONS);
     const json = await data.json();
    
     dispatch(addNowPlayingMovies(json.results))
     
    }
}
export default useGetNowPlayingMovies;