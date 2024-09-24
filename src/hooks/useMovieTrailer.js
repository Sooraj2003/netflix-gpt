import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMainTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
   //  const mainTrailer = useSelector((store)=>store.movies.mainTrailer)
    useEffect(()=>{
       getMainVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const getMainVideo = async ()=>{
      try{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const filteredData = json.results.filter((video)=>video.type==="Trailer");
       
        const trailer = filteredData.length? filteredData[0]:json.results[0];
        dispatch(addMainTrailer(trailer));
      }
      catch(e){
        console.log(e+" fetch failed");
        
      }
     
   }
}

export default useMovieTrailer;