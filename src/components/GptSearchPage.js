import { BACKGROUND_URL } from "../utils/constants"

import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
  return (
    <div>
       <div className="absolute -z-10">
        <img className="h-screen w-screen object-cover md:object-none"alt="backgroundImage" src={BACKGROUND_URL}/>
       </div>
      <GptSearchBar/>
      
    </div>
  )
}

export default GptSearchPage
