
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  
  const showGptSearch = useSelector(store=>store.gptSearchPage.showGptSearch)
    // every is logging 2 times is bcoz component renders 2 times to check the consistency of api calls and other methods,this is due to the react strict mode and only happens development build and not in production build.
  useGetNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  
  
  return (
    <div className="flex overflow-x-hidden">
      <div>
        <Header/>
        {showGptSearch ? <GptSearchPage/>: <><MainContainer/>
        <SecondaryContainer/></>}
        
        
        {/*
          Main container
           - Video Background
           - Video Title
          Secondary container
           - Movies list * n
              movies*n
        */}
      </div>
      
    </div>
  )
}

export default Browse;
