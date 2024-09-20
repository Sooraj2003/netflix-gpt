import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMainTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
   //  const mainTrailer = useSelector((store)=>store.movies.mainTrailer)
    useEffect(()=>{
       getMainVideo();
    },[]);
    const getMainVideo = async ()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
     const json = await data.json();
     const filteredData = json.results.filter((video)=>video.type==="Trailer");
    
     const trailer = filteredData.length? filteredData[0]:json.results[0];
     dispatch(addMainTrailer(trailer));
   }
}

export default useMovieTrailer;