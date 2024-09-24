import { useParams } from "react-router-dom"
import useMovieTrailer from "../hooks/useMovieTrailer"
import { useDispatch, useSelector } from "react-redux";
import { addMainTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { FiCommand } from "react-icons/fi";


const MoviePage = () => {
    const id = useParams();
   const  dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(addMainTrailer(null));
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
     useMovieTrailer(id.movieId);
     const mainTrailer = useSelector((store)=>store.movies.mainTrailer);

    return  !mainTrailer? <div className="flex w-screen h-screen justify-center items-center text-9xl text-white bg-black"><FiCommand className="animate-spin" /></div>:
   (
      <div className="w-screen h-screen md:h-full p-11 pr-16 bg-black">
      <iframe className="w-full aspect-video rounded-3xl" src={"https://www.youtube.com/embed/"+mainTrailer.key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    
  )
}

export default MoviePage
