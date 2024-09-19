import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"


const MainContainer = () => {
    const movies = useSelector(store=>store.movies.nowPlayingMovies);
  
    
    if(!movies) return;
    const movie = movies[0];
    
    
    const {original_title,overview,id} = movie;
  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
