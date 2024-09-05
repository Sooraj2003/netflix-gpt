import NETFLIX_LOGO from "../utils/Netflix_Logo_PMS.png"

const Header = () => {
  return (
    <div className="absolute  bg-gradient-to-b from-black z-30">
      <img className="w-44 p-2 m-2" alt="netflix-logo" src={NETFLIX_LOGO}/>
    </div>
  )
}

export default Header
