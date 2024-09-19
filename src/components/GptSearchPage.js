import { BACKGROUND_URL } from "../utils/constants"
import GptMoviesSuggestions from "./GptMoviesSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
  return (
    <div>
       <div className="absolute -z-10">
        <img alt="backgroundImage" src={BACKGROUND_URL}/>
       </div>
      <GptSearchBar/>
      <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearchPage
