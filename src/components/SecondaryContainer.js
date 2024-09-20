import { useSelector } from "react-redux"
import MovieList from "./MovieList";


const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  console.log(movies);
  
  return (
    <div className=" bg-black">
      <div className="relative z-40 mt-0 md:-mt-48">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      <MovieList title="Popular" movies={movies.popularMovies}/>
      <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
      <MovieList title="Upcoming" movies={movies.upComingMovies}/>
      </div>
      {/*
       MovieList * n
        - Movies * n
      
      */}
    </div>
  )
}

export default SecondaryContainer
