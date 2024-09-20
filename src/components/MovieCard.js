import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({movie}) => {
    console.log(movie);
    
  return (
    
    <div className=" min-w-[100px] md:min-w-[192px] w-28 md:w-48 pl-4 overflow-hidden">
      <Link to={"/movie/"+movie.id}>
      <img className="transition-transform duration-300 ease-in-out transform hover:scale-110  " alt="movie-poster" src={IMG_CDN_URL+movie.poster_path}/>
      </Link>
    </div>
    
  )
}

export default MovieCard
