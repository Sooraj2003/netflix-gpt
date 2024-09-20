import MovieCard from "./MovieCard"


const MovieList = ({title,movies}) => {
    console.log(movies);
    
  return (
    <div className="">
    <h1 className="text-white text-lg md:text-2xl p-4">{title}</h1>
    <div className="flex overflow-x-scroll no-scrollbar w-screen ">
       
       {movies?.map((movie)=><MovieCard key={movie.id}  movie={movie}/>)}
      
    </div>
    </div>
  )
}

export default MovieList
