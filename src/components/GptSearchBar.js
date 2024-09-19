import { useDispatch, useSelector } from "react-redux"
import language from "../utils/languageConstants"
import { useRef, useState } from "react"
import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../utils/searchedMovieSlice";
import MovieList from "./MovieList";


const GptSearchBar = () => {
  

  const searchText = useRef();
  const dispatch = useDispatch();
  const [useLoading,setLoading] = useState(false);
  const handleGptSearchText = ()=>{
    setLoading(true);
    const query = searchText.current.value;
     const searchMovie = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+query+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      const filterdData = json.results?.filter((movie)=>movie.poster_path)
      dispatch(addMovies(filterdData));
      setLoading(false);
      
     }
     searchMovie();
     
  }

  const langKey = useSelector((store)=>store.language.lang);
  const movies = useSelector((store)=>store.searchedMovies.movies)
  return (
      <>
    <div className="flex justify-center pt-[15%] w-screen">
        <form className="bg-black w-1/2 grid grid-cols-12 p-6 " onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className="px-6 py-3 col-span-9" type="text" placeholder={language[langKey].placeholderText}/>
            <button onClick={handleGptSearchText} className="ml-2 px-4 py-3 col-span-3 bg-red-800 hover:bg-red-900 text-white font-bold text-lg rounded-lg">{language[langKey].search}</button>
        </form>
        </div>
        {
        useLoading ?(
        <h1 className="text-white font-bold text-3xl text-center p-4 m-4">Loading.....</h1>
        ) : (
        <MovieList title={searchText.current?.value} movies={movies}/>
       )}
        </>
    
  )
}

export default GptSearchBar
