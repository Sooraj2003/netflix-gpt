import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({movie}) => {
    console.log(movie);
    
  return (
    <div className="min-w-[192px] w-48 pl-4 ">
      <img alt="movie-poster" src={IMG_CDN_URL+movie.poster_path}/>
    </div>
  )
}

export default MovieCard
