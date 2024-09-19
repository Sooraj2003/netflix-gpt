import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute z-40 w-screen h-[150%] bg-gradient-to-r from-black">
    <div className="  mt-52 mx-12 w-1/4  text-white">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-lg py-2">{overview}</p>
      <div className="my-2">
        <button className="bg-white text-xl font-medium py-2 px-7 text-black rounded-lg hover:bg-opacity-80"><FaPlay className="inline-block -mt-1" /> Play</button>
        <button className="bg-gray-500 text-xl font-medium py-2 px-7 bg-opacity-50 mx-2  text-white rounded-lg hover:bg-opacity-30"><IoMdInformationCircleOutline size={23} className="inline-block font-bold -mt-1" /> More Info</button>
      </div>
    </div>
    </div>
  )
}

export default VideoTitle
